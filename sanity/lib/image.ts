import imageUrlBuilder from '@sanity/image-url';

import { createSanityClient } from './client';

const builder = imageUrlBuilder(createSanityClient());

export function urlForImage(source: unknown) {
  return builder.image(source);
}
