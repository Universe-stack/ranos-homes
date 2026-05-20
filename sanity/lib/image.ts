import imageUrlBuilder from '@sanity/image-url';

import { createSanityClient } from './client';

function getBuilder() {
  return imageUrlBuilder(createSanityClient());
}

type SanityImageBuilder = ReturnType<typeof imageUrlBuilder>;

export function urlForImage(source: Parameters<SanityImageBuilder['image']>[0]) {
  const builder = getBuilder();

  return builder.image(source);
}
