import { NextRequest, NextResponse } from 'next/server';

import {
  createSanityReadClient,
  createSanityWriteClient,
  tryGetSanityEnv,
} from '@/sanity/lib/client';
import {
  PRODUCT_ID_BY_ROUTE_PARAM_QUERY,
  PRODUCT_REVIEWS_BY_PRODUCT_ID_QUERY,
} from '@/sanity/queries';

type RouteParams = {
  params: Promise<{ id: string }>;
};

type ReviewPayload = {
  reviewerName?: string;
  reviewerEmail?: string;
  rating?: number;
  title?: string;
  comment?: string;
};

type ProductLookup = {
  _id: string;
  title?: string;
  slug?: {
    current?: string;
  };
};

function asValidRating(value: unknown): number | null {
  if (typeof value !== 'number') return null;
  if (!Number.isFinite(value)) return null;

  const rounded = Math.round(value);
  if (rounded < 1 || rounded > 5) return null;

  return rounded;
}

async function resolveProduct(routeParam: string): Promise<ProductLookup | null> {
  const client = createSanityReadClient();

  const product = await client.fetch<ProductLookup | null>(
    PRODUCT_ID_BY_ROUTE_PARAM_QUERY,
    { routeParam },
  );

  return product;
}

export async function GET(_request: NextRequest, context: RouteParams) {
  const env = tryGetSanityEnv();
  if (!env) {
    return NextResponse.json({
      reviews: [],
      sanityReady: false,
      message: 'Sanity is not configured yet.',
    });
  }

  try {
    const { id } = await context.params;
    const routeParam = decodeURIComponent(id);
    const product = await resolveProduct(routeParam);

    if (!product?._id) {
      return NextResponse.json({
        reviews: [],
        sanityReady: true,
        message: 'Product not found in Sanity yet.',
      });
    }

    const client = createSanityReadClient();
    const reviews = await client.fetch(
      PRODUCT_REVIEWS_BY_PRODUCT_ID_QUERY,
      { productId: product._id },
    );

    return NextResponse.json({
      reviews,
      sanityReady: true,
      productId: product._id,
    });
  } catch {
    return NextResponse.json(
      {
        reviews: [],
        sanityReady: true,
        message: 'Unable to load reviews right now.',
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest, context: RouteParams) {
  const env = tryGetSanityEnv();
  if (!env) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Sanity is not configured yet.',
      },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as ReviewPayload;
    const reviewerName = body.reviewerName?.trim();
    const comment = body.comment?.trim();
    const rating = asValidRating(body.rating);

    if (!reviewerName || !comment || !rating) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Name, rating, and review comment are required.',
        },
        { status: 400 },
      );
    }

    const { id } = await context.params;
    const routeParam = decodeURIComponent(id);
    const product = await resolveProduct(routeParam);

    if (!product?._id) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Product not found in Sanity yet.',
        },
        { status: 404 },
      );
    }

    const writeClient = createSanityWriteClient();
    const submittedAt = new Date().toISOString();

    const createdReview = await writeClient.create({
      _type: 'review',
      product: {
        _type: 'reference',
        _ref: product._id,
      },
      productSlug: product.slug?.current ?? routeParam,
      reviewerName,
      reviewerEmail: body.reviewerEmail?.trim() || undefined,
      rating,
      title: body.title?.trim() || undefined,
      comment,
      approved: false,
      submittedAt,
    });

    return NextResponse.json(
      {
        ok: true,
        message: 'Review submitted. It will appear after approval.',
        review: {
          _id: createdReview._id,
          reviewerName,
          reviewerEmail: body.reviewerEmail?.trim() || undefined,
          rating,
          title: body.title?.trim() || undefined,
          comment,
          submittedAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    const isMissingToken =
      error instanceof Error && error.message.includes('SANITY_API_WRITE_TOKEN');

    if (isMissingToken) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Write token is missing. Set SANITY_API_WRITE_TOKEN to store reviews.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: 'Unable to submit review right now.',
      },
      { status: 500 },
    );
  }
}
