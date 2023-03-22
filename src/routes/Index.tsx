import { useQuery } from 'react-query';

const Index = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      'https://newsapi.org/v2/top-headlines?country=pl&apiKey=3ff29cca866a4f0cae5202cef9e9008a'
    ).then((res) => res.json())
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {error instanceof Error && error.message}</>;

  console.log(data.articles);
  return (
    <>
      <h1>index page</h1>
    </>
  );
};

export default Index;
