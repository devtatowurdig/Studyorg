// Detect API URL based on environment
const getApiUrl = (): string => {
  // If running on studyorg.frameworksenac.com.br, use that domain
  if (typeof window !== 'undefined' && window.location.hostname === 'studyorg.frameworksenac.com.br') {
    return `http://studyorg.frameworksenac.com.br:3071`;
  }
  
  // Otherwise use localhost (development)
  return 'http://localhost:3071';
};

export const API_BASE_URL = getApiUrl();
