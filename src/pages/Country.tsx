import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../Redux/hooks';
import { updateArticlesCount } from '../Redux/slices/articlesCount';
import { COUNTRIES } from '../utils/countries';
import { GNEWS_API_URL, NEWS_API_URL } from '../utils/news-api';
import NewsArticles from '../components/NewsArticles';

const Country = () => {
  const { code } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, isError, data, isRefetching } = useQuery(
    ['news', code],
    () => fetch(GNEWS_API_URL(code)).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        dispatch(updateArticlesCount(data?.articles?.length));
      },
    }
  );

  const getFullCountryName = (code: string | undefined) =>
    COUNTRIES.find((country) => country.code === code)?.name;

  return (
    <div>
      <NewsArticles
        articles={data?.articles}
        country={getFullCountryName(code?.toUpperCase())}
        isLoading={isLoading || isRefetching}
        isError={isError}
      />
    </div>
  );
};

export default Country;
