import { useQuery } from 'react-query';
import { useAppDispatch } from '../Redux/hooks';
import { updateArticlesCount } from '../Redux/slices/articlesCount';
import { GNEWS_API_URL } from '../utils/news-api';
import NewsArticles from '../components/NewsArticles';

const mainCountry = {
  code: 'US',
  name: 'United States',
};

const Home = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isRefetching, isError, data } = useQuery(
    'mainNews',
    () => fetch(GNEWS_API_URL(mainCountry.code)).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        dispatch(updateArticlesCount(data?.articles?.length));
      },
    }
  );

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
