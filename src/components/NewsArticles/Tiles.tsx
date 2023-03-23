import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';
import { useAppDispatch } from '../../Redux/hooks';
import { toggleModal, setDetails } from '../../Redux/slices/newsDetails';
import PlaceholderImage from '../../assets/placeholder-image.jpg';
import SourceBadge from '../SourceBadge';

const Tiles = ({ articles }: { articles: TArticle[] }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='grid animate-fadeIn gap-x-6 gap-y-8 md:grid-cols-2'>
      {articles.map((article, idx) => (
        <article
          key={idx}
          className='flex flex-col justify-between border border-t-4 px-3 pt-3 pb-1 shadow-md lg:[&:nth-child(5n+1)]:col-span-2 lg:[&:nth-child(5n+6)]:mt-12'
        >
          <div className='flex flex-col'>
            <div className='h-56 w-full bg-gray-300 lg:h-80'>
              <img
                src={article.urlToImage || PlaceholderImage}
                alt={article.title}
                className='h-full w-full object-cover'
              />
            </div>

            <SourceBadge label={article.source.name} />

            <h2 className='mb-2 font-bold leading-tight'>{article.title}</h2>

            <p className='overflow-hidden text-sm text-gray-500'>{article.description}</p>
          </div>

          <div className='flex flex-col gap-4 pt-5'>
            <button
              onClick={() => {
                dispatch(toggleModal());
                dispatch(setDetails(article));
              }}
              className='mx-auto mt-2 w-fit border border-gray-600 px-8 py-2 text-xs text-gray-600 transition-shadow hover:shadow-md'
            >
              READ MORE
            </button>

            <p className='text-center text-xs font-semibold text-gray-400 '>
              {formatDate(article.publishedAt)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Tiles;
