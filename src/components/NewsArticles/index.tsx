import { useAppSelector } from '../../Redux/hooks';
import { TArticle } from '../../types/article';
import { NEWS_VIEWS } from '../../utils/newsViews';
import ClipLoader from 'react-spinners/ClipLoader';
import List from './List';
import Tiles from './Tiles';

const NewsArticles = ({
  articles,
  country,
  isLoading,
  isError,
}: {
  articles: TArticle[];
  country: string | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  const viewType = useAppSelector((state) => state.activeView);

  return (
    <section>
      <h1 className='mb-6 flex h-12 flex-col items-start justify-start border-l-8 border-brandDarker pl-3 text-left text-2xl font-bold leading-6 sm:h-16 sm:text-3xl sm:leading-8'>
        {country ? (
          <>
            Latest news <span className='text-base font-semibold sm:text-xl'> from {country}</span>
          </>
        ) : (
          <>
            Country <span> not found</span>
          </>
        )}
      </h1>

      {isLoading ? (
        <p className='flex min-h-[400px] items-center justify-center '>
          <ClipLoader size={50} />
        </p>
      ) : isError ? (
        <p>An error has occured.</p>
      ) : !articles.length ? (
        <p>No news found</p>
      ) : (
        <>
          {viewType === NEWS_VIEWS[0].value && <Tiles articles={articles} />}
          {viewType === NEWS_VIEWS[1].value && <List articles={articles} />}
        </>
      )}
    </section>
  );
};

export default NewsArticles;
