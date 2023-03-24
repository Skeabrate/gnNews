import { useQuery } from 'react-query';
import { useAppSelector } from '../Redux/hooks';
import { GNEWS_API_URL } from '../utils/news-api';
import { getCountryCode } from '../utils/getCountryCode';
import { useArticlesLength } from '../hooks/useArticlesLength';
import translate from '../i18n/translate';
import NewsArticles from '../components/NewsArticles';

const getMainNews = (code: string, lang: string) => {
  return fetch(GNEWS_API_URL({ code, lang })).then((res) => res.json());
};

const mainNewsQuery = (lang: string) => {
  const currentCountry = getCountryCode(navigator.language).toLowerCase();

  return {
    queryKey: ['homeNews', lang],
    queryFn: async () => getMainNews(currentCountry, lang),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  };
};

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

  useArticlesLength(data?.totalResults);

  return (
    <NewsArticles
      articles={data?.articles}
      country={translate('yourCountry')}
      isLoading={isLoading || isRefetching}
      isError={isError}
    />
  );
};

export default Home;
