export const NEWS_API_URL = (code?: string) =>
  `https://newsapi.org/v2/top-headlines?pageSize=100&country=${code?.toLowerCase()}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

export const NEWS_API_CATEGORY_URL = (category: string, code?: string) =>
  `https://newsapi.org/v2/top-headlines?pageSize=100&country=${code?.toLowerCase()}&category=${category}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
