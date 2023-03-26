import { useQuery } from 'react-query';
import { useAppSelector } from '../Redux/hooks';
import { GNEWS_API_URL } from '../utils/news-api';
import { useArticlesLength } from '../hooks/useArticlesLength';
import NewsArticles from '../components/NewsArticles';
import translate from '../i18n/translate';

const getMainNews = (lang: string) => {
  return fetch(GNEWS_API_URL({ lang })).then((res) => res.json());
};

const mainNewsQuery = (lang: string) => ({
  queryKey: ['homeNews', lang],
  queryFn: async () => getMainNews(lang),
  staleTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
});

export const loader =
  (queryClient, lang = 'en') =>
  async () => {
    const query = mainNewsQuery(lang);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

const Home = () => {
  const language = useAppSelector((state) => state.i18n);
  const getLanguage = language.split('-')[0];

  const { isLoading, isRefetching, isError, data } = useQuery(mainNewsQuery(getLanguage));

  useArticlesLength(data?.articles?.length);

  return (
    <NewsArticles
      articles={data?.articles}
      country={translate('aroundTheWorld')}
      isLoading={isLoading || isRefetching}
      isError={isError}
    />
  );
};

export default Home;
