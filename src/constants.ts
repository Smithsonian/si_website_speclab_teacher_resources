export const SPECLAB_URL = 'https://datalabs.cfa.harvard.edu/spectrumlab';

const getAPIBaseUrl = () => {
  if (import.meta.env.DEV) {
    return '/api';
  }
  return `${import.meta.env.BASE_URL}../api`;
};

export const API_BASE_URL = getAPIBaseUrl();
