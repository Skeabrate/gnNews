import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks';
import { COUNTRIES } from '../utils/countries';
import { GNEWS_API_URL } from '../utils/news-api';
import { useArticlesLength } from '../hooks/useArticlesLength';
import NewsArticles from '../components/NewsArticles';

const getCountry = (code: string, lang: string) =>
  fetch(GNEWS_API_URL({ code, lang })).then((res) => res.json());

const countryNewsQuery = (code: string, lang: string) => ({
  queryKey: ['country', code, lang],
  queryFn: async () => getCountry(code, lang),
  staleTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
});

export const loader =
  (queryClient, lang = 'en') =>
  async ({ params }) => {
    const query = countryNewsQuery(params.contactId, lang);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

const Country = () => {
  const { code } = useParams();

  const language = useAppSelector((state) => state.i18n);
  const languageToFetch = language.split('-')[0];

  const { data, isLoading, isRefetching, isError } = useQuery(
    countryNewsQuery(code, languageToFetch)
  );

  useArticlesLength(data?.articles?.length);

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
