import { useQuery } from 'react-query';
import NewsArticles from '../components/NewsArticles';

const Index = () => {
  const indexCountry = {
    code: 'US',
    name: 'United States',
  };

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${indexCountry.code.toLowerCase()}&apiKey=3ff29cca866a4f0cae5202cef9e9008a`
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {error instanceof Error && error.message}</>;

  return (
    <NewsArticles
      articles={data.articles}
      country={indexCountry.name}
    />
  );
};

export default Index;
