import { useAppSelector } from '../../Redux/hooks';
import { TArticle } from '../../types/article';
import { NEWS_VIEWS } from '../../utils/newsViews';
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
      <h1 className='mb-6 flex h-12 flex-col items-start justify-start border-l-8 border-brandDarker pl-3 text-left text-xl font-semibold  leading-6'>
        {country ? (
          <>
            Latest news <span> from {country}</span>
          </>
        ) : (
          <>
            Country <span> not found</span>
          </>
        )}
      </h1>

      {isLoading ? (
        <p>Loading ...</p>
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
