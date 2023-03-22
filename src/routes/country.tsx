import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import NewsArticles from '../components/NewsArticles';
import { COUNTRIES } from '../utils/countries';

const Country = () => {
  const { code } = useParams();

  const { isLoading, isError, data, isRefetching } = useQuery(['indexNews', code], () =>
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${code?.toLowerCase()}&apiKey=3ff29cca866a4f0cae5202cef9e9008a`
    ).then((res) => res.json())
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
