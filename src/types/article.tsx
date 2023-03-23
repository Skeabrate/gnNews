export type TArticle = {
  author?: string | null;
  content?: string | null;
  description?: null | string;
  publishedAt: string;
  source: TSource;
  title: string;
  url: string;
  image?: null | string;
};

export type TSource = {
  url: string | null;
  name: string;
};
