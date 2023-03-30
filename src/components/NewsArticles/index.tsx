import { useMemo } from 'react';
import { useAppSelector } from '../../redux-tk/hooks';
import { TArticle } from '../../types/article';
import { NEWS_VIEWS } from '../../utils/newsViews';
import translate from '../../i18n/translate';
import Tiles from './Tiles/Tiles';
import SkeletonTiles from './Tiles/Skeleton';
import List from './List/List';
import SkeletonList from './List/Skeleton';

const NewsArticles = ({
  articles = [],
  country,
  isLoading,
  isError,
}: {
  articles: TArticle[];
  country: React.ReactNode | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  const viewType = useAppSelector((state) => state.activeView);

  const views = useMemo(
    () => ({
      [NEWS_VIEWS[0].id]: {
        view: <Tiles articles={articles} />,
        skeletonLoader: <SkeletonTiles />,
      },
      [NEWS_VIEWS[1].id]: {
        view: <List articles={articles} />,
        skeletonLoader: <SkeletonList />,
      },
    }),
    [articles]
  );

  return (
    <section>
      <h1 className='mb-6 flex h-12 flex-col items-start justify-start border-l-8 border-brandDarker pl-3 text-left text-2xl font-bold leading-6 sm:h-16 sm:text-3xl sm:leading-8'>
        {country ? (
          <>
            {translate('newsLabel1')}
            <span className='text-base font-semibold sm:text-xl'>
              {translate('newsLabel2')} {country}
            </span>
          </>
        ) : (
          translate('noCountryFound')
        )}
      </h1>

      {isLoading ? (
        views[viewType].skeletonLoader
      ) : isError ? (
        <p className='min-h-[400px]'>{translate('error')}</p>
      ) : !articles.length ? (
        <p className='min-h-[400px]'>{translate('noNewsFound')}</p>
      ) : (
        views[viewType].view
      )}
    </section>
  );
};

export default NewsArticles;
