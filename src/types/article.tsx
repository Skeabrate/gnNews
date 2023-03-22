export type TArticle = {
  author: string;
  content?: null | string;
  description?: null | string;
  publishedAt: string;
  source: TSource;
  title: string;
  url: string;
  urlToImage?: null | string;
};

export type TSource = {
  id: string;
  name: string;
};
