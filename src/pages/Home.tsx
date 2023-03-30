import { useQuery } from 'react-query';
import { useAppSelector } from '../redux/hooks';
import { GNEWS_API_URL } from '../utils/news-api';
import { getLanguage } from '../utils/getLanguage';
import { useArticlesLength } from '../hooks/useArticlesLength';
import { LOCALES } from '../i18n/locales';
import translate from '../i18n/translate';
import NewsArticles from '../components/NewsArticles';

const getMainNews = (lang: string) => {
  return fetch(GNEWS_API_URL({ lang })).then((res) => res.json());
};

const mainNewsQuery = (lang: string) => ({
  queryKey: ['homeNews', lang],
  queryFn: async () => getMainNews(lang),
  staleTime: 1000 * 60 * 2,
  refetchOnWindowFocus: false,
});

export const loader =
  (queryClient, lang = getLanguage(LOCALES.ENGLISH)) =>
  async () => {
    const query = mainNewsQuery(lang);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

const Home = () => {
  const language = useAppSelector((state) => state.i18n);
  const { isLoading, isRefetching, isError, data } = useQuery(mainNewsQuery(getLanguage(language)));

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
