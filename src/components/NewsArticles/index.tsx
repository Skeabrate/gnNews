import { useAppSelector } from '../../Redux/hooks';
import { TArticle } from '../../types/article';
import { NEWS_VIEWS } from '../../utils/newsViews';
import List from './List';
import Tiles from './Tiles';

const NewsArticles = ({ articles, country }: { articles: TArticle[]; country: string }) => {
  const viewType = useAppSelector((state) => state.activeView);

  return (
    <section>
      <h1 className='border-l-8 mb-6 text-xl font-semibold leading-6 text-left items-start pl-3 flex flex-col justify-start  border-lime-500'>
        Latest news <span> from {country}</span>
      </h1>

      {viewType === NEWS_VIEWS[0].value ? (
        <Tiles articles={articles} />
      ) : viewType === NEWS_VIEWS[1].value ? (
        <List articles={articles} />
      ) : null}
    </section>
  );
};

export default NewsArticles;
