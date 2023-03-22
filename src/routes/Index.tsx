import { useQuery } from 'react-query';
import NewsGrid from '../components/NewsGrid';

const Index = () => {
  const indexCountry = 'US';

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${indexCountry.toLowerCase()}&apiKey=3ff29cca866a4f0cae5202cef9e9008a`
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {error instanceof Error && error.message}</>;

  return (
    <>
      <NewsGrid
        articles={data.articles}
        country={indexCountry}
      />
    </>
  );
};

export default Index;
