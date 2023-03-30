import { TArticle } from '../../../types/article';
import { formatDate } from '../../../utils/formatDate';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleModal, setDetails } from '../../../redux/slices/newsDetails';
import translate from '../../../i18n/translate';
import PlaceholderImage from '../../../assets/placeholder-image.jpg';
import SourceBadge from '../../SourceBadge';

const Tiles = ({ articles }: { articles: TArticle[] }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      data-testid='tiles-view'
      className='grid animate-fadeIn gap-x-6 gap-y-8 md:grid-cols-2'
    >
      {articles.map((article, idx) => (
        <article
          key={idx}
          className='big-tile flex flex-col justify-between border border-t-4 px-3 pt-3 pb-1 shadow-md dark:border-0 dark:bg-zinc-900 lg:[&:nth-child(5n+1)]:col-span-2 lg:[&:nth-child(5n+6)]:mt-12'
        >
          <div className='flex flex-col'>
            <div className='h-56 w-full bg-gray-300 dark:bg-zinc-900'>
              <img
                src={article.image || PlaceholderImage}
                alt={article.title}
                className='h-full w-full object-cover'
              />
            </div>

            <SourceBadge label={article.source.name} />

            <h2 className='mb-2 font-bold leading-tight'>{article.title}</h2>

            <p className='overflow-hidden text-sm text-gray-500 dark:text-zinc-300'>
              {article.description}
            </p>
          </div>

          <div className='flex flex-col gap-4 pt-5'>
            <button
              onClick={() => {
                dispatch(toggleModal());
                dispatch(setDetails(article));
              }}
              className='mx-auto mt-2 w-fit border border-gray-600 px-8 py-2 text-xs text-gray-600 transition-shadow hover:shadow-md dark:border-zinc-400 dark:text-zinc-300'
            >
              {translate('readMore')}
            </button>

            <p className='text-center text-xs font-semibold text-gray-400 dark:text-zinc-300'>
              {formatDate(article.publishedAt)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Tiles;
