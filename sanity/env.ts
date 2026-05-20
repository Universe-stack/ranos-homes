const DEFAULT_API_VERSION = '2025-01-01';

type RequiredSanityEnv = {
  projectId: string;
  dataset: string;
  apiVersion: string;
};

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

export function getSanityEnv(): RequiredSanityEnv {
  const projectId = readEnv('NEXT_PUBLIC_SANITY_PROJECT_ID');
  const dataset = readEnv('NEXT_PUBLIC_SANITY_DATASET');

  if (!projectId || !dataset) {
    throw new Error(
      'Missing Sanity env vars. Expected NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.',
    );
  }

  return {
    projectId,
    dataset,
    apiVersion: readEnv('NEXT_PUBLIC_SANITY_API_VERSION') ?? DEFAULT_API_VERSION,
  };
}

export function getSanityReadToken(): string | undefined {
  return readEnv('SANITY_API_READ_TOKEN');
}

export function getSanityWriteToken(): string | undefined {
  return readEnv('SANITY_API_WRITE_TOKEN');
}

export function hasSanityEnv(): boolean {
  return Boolean(readEnv('NEXT_PUBLIC_SANITY_PROJECT_ID') && readEnv('NEXT_PUBLIC_SANITY_DATASET'));
}
