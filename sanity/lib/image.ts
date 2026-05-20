import imageUrlBuilder from '@sanity/image-url';

import { createSanityClient } from './client';

const builder = imageUrlBuilder(createSanityClient());

export function urlForImage(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
