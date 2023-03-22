import { useQuery } from 'react-query';
import NewsArticles from '../components/NewsArticles';

const Index = () => {
  const indexCountry = {
    code: 'US',
    name: 'United States',
  };

  const { isLoading, isError, data } = useQuery('indexNews', () =>
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${indexCountry.code.toLowerCase()}&apiKey=3ff29cca866a4f0cae5202cef9e9008a`
    ).then((res) => res.json())
  );

  return (
    <NewsArticles
      articles={data?.articles}
      country={indexCountry.name}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default Index;
