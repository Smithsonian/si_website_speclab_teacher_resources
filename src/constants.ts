export const SPECLAB_URL = 'https://datalabs.cfa.harvard.edu/spectrumlab';

const getAPIBaseUrl = (): string => {
  if (import.meta.env.DEV) {
    return '/api';
  }
  const url = new URL('../api', import.meta.env.BASE_URL);
  return url.toString();
};

export const API_BASE_URL = getAPIBaseUrl();
