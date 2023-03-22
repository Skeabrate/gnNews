import { useAppSelector } from '../../Redux/hooks';
import { TArticle } from '../../types/article';
import { NEWS_VIEWS } from '../../utils/newsViews';
import List from './List';
import Tiles from './Tiles';

const NewsArticles = ({ articles, country }: { articles: TArticle[]; country: string }) => {
  const viewType = useAppSelector((state) => state.activeView);

  return (
    <section>
      <h1 className='border-l-8 mb-6 text-xl font-semibold pl-2 border-lime-400'>
        Latest news from {country}
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
