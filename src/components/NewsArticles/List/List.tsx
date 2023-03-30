import { TArticle } from '../../../types/article';
import { formatDate } from '../../../utils/formatDate';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleModal, setDetails } from '../../../redux/slices/newsDetails';
import SourceBadge from '../../SourceBadge';

const List = ({ articles }: { articles: TArticle[] }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      data-testid='list-view'
      className='grid animate-fadeIn gap-5 opacity-0'
    >
      {articles.map((article, idx) => (
        <article key={idx}>
          <button
            className='flex w-full cursor-pointer flex-col justify-between border border-t-2 px-4 pt-2 pb-4 shadow-sm transition-shadow hover:shadow-md dark:border-0 dark:bg-zinc-900'
            onClick={() => {
              dispatch(toggleModal());
              dispatch(setDetails(article));
            }}
          >
            <p className='text-xs font-semibold text-gray-400'>{formatDate(article.publishedAt)}</p>

            <SourceBadge label={article.source.name} />

            <h2 className='text-left font-semibold leading-tight'>{article.title}</h2>
          </button>
        </article>
      ))}
    </div>
  );
};

export default List;
