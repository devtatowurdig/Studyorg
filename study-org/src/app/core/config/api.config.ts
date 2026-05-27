// Detect API URL based on environment
const getApiUrl = (): string => {
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
};

export const API_BASE_URL = getApiUrl();
