import { useQuery } from 'react-query';
import { GNEWS_API_URL } from '../utils/news-api';
import { useArticlesLength } from '../hooks/useArticlesLength';
import NewsArticles from '../components/NewsArticles';

const mainCountry = {
  code: 'US',
  name: 'United States',
};

const getMainNews = (code: string) => fetch(GNEWS_API_URL(code)).then((res) => res.json());

const mainNewsQuery = () => ({
  queryKey: 'homeNews',
  queryFn: async () => getMainNews(mainCountry.code),
  staleTime: 1000 * 60 * 2,
  refetchOnWindowFocus: false,
});

export const loader = (queryClient) => async () => {
  const query = mainNewsQuery();
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const Home = () => {
  const { isLoading, isRefetching, isError, data } = useQuery(mainNewsQuery());

  useArticlesLength(data?.totalResults);

  return (
    <NewsArticles
      articles={data?.articles}
      country={mainCountry.name}
      isLoading={isLoading || isRefetching}
      isError={isError}
    />
  );
};

export default Home;
