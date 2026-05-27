type RuntimeEnv = {
  API_URL?: string;
};

const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, '');

const getApiUrl = (): string => {
  const runtimeEnv = (globalThis as { __env?: RuntimeEnv }).__env?.API_URL;

  if (typeof runtimeEnv === 'string' && runtimeEnv.trim()) {
    return normalizeBaseUrl(runtimeEnv.trim());
  }

  return '/api';
};

export const API_BASE_URL = getApiUrl();
