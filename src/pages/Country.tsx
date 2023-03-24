import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { COUNTRIES } from '../utils/countries';
import { GNEWS_API_URL } from '../utils/news-api';
import { useArticlesLength } from '../hooks/useArticlesLength';
import NewsArticles from '../components/NewsArticles';

const getCountry = (code: string) => fetch(GNEWS_API_URL(code)).then((res) => res.json());

const countryNewsQuery = (code: string) => ({
  queryKey: ['country', code],
  queryFn: async () => getCountry(code),
  staleTime: 1000 * 60 * 2,
  refetchOnWindowFocus: false,
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = countryNewsQuery(params.contactId);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

const Country = () => {
  const { code } = useParams();
  const { data, isLoading, isRefetching, isError } = useQuery(countryNewsQuery(code));

  useArticlesLength(data?.totalResults);

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
