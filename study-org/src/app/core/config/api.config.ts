// Use localhost for development, or configure via environment variable for production
export const API_BASE_URL = (globalThis as any).NG_APP_API_URL || 'http://localhost:3071';
