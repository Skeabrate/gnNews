export const NEWS_API_URL = (code?: string) =>
  `https://newsapi.org/v2/top-headlines?pageSize=100&country=${code?.toLowerCase()}&apiKey=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;

export const GNEWS_API_URL = ({ code, lang }: { code?: string; lang: string }) =>
  `https://gnews.io/api/v4/top-headlines?lang=${lang}${
    code ? '&country=' + code?.toLowerCase() : ''
  }&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`;
