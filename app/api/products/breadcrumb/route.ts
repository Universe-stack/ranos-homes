import { NextRequest, NextResponse } from 'next/server';
import { getProductForBreadcrumb } from '@/sanity/queries/breadcrumb';

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();

    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const product = await getProductForBreadcrumb(productId);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error('Error in breadcrumb API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product breadcrumb' },
      { status: 500 }
    );
  }
}
