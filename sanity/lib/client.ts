import { createClient } from '@sanity/client';

import {
  getSanityEnv,
  getSanityReadToken,
  getSanityWriteToken,
  hasSanityEnv,
} from '../env';

export function tryGetSanityEnv() {
  if (!hasSanityEnv()) return null;

  try {
    return getSanityEnv();
  } catch {
    return null;
  }
}

export function createSanityReadClient() {
  const env = getSanityEnv();

  return createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: true,
    token: getSanityReadToken(),
    perspective: 'published',
  });
}

export function createSanityWriteClient() {
  const env = getSanityEnv();
  const token = getSanityWriteToken();

  if (!token) {
    throw new Error('Missing SANITY_API_WRITE_TOKEN for write operations.');
  }

  return createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: false,
    token,
    perspective: 'raw',
  });
}

export function createSanityClient() {
  return createSanityReadClient();
}
