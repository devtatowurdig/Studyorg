type RuntimeEnv = {
  API_URL?: string;
};

const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, '');

const getApiUrl = (): string => {
<<<<<<< HEAD
  const runtimeEnv = (globalThis as { __env?: RuntimeEnv }).__env?.API_URL;

  if (typeof runtimeEnv === 'string' && runtimeEnv.trim()) {
    return normalizeBaseUrl(runtimeEnv.trim());
  }

  return '/api';
=======
  if (typeof window === 'undefined') {
    return '/api';
  }

  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // In development (localhost), use proxy path
  if (isLocalhost) {
    return '/api';
  }
  
  // In production, use full URL
  return `http://${hostname}:3071`;
>>>>>>> 5a6ee4dc0734b6126ffc07a145e3b895c18fc41f
};

export const API_BASE_URL = getApiUrl();
