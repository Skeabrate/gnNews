import { useQuery } from 'react-query';
import { useAppDispatch } from '../Redux/hooks';
import { updateArticlesCount } from '../Redux/slices/articlesCount';
import { NEWS_API_CATEGORY_URL } from '../utils/news-api';
import NewsArticles from '../components/NewsArticles';

const indexCountry = {
  code: 'US',
  name: 'United States',
};

const Index = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isRefetching, isError, data } = useQuery(
    'indexNews',
    () => fetch(NEWS_API_CATEGORY_URL('business', indexCountry.code)).then((res) => res.json()),
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
      country={indexCountry.name}
      isLoading={isLoading || isRefetching}
      isError={isError}
    />
  );
};

export default Index;
