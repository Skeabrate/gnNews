import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';
import PlaceholderImage from '../../assets/placeholder-image.jpg';

const Tiles = ({ articles }: { articles: TArticle[] }) => {
  return (
    <div className='grid animate-fadeIn gap-x-6 gap-y-8 sm:grid-cols-fluid'>
      {articles.map(
        (
          { author, publishedAt, title, urlToImage, source: { name }, url, content, description },
          idx
        ) => (
          <article
            key={idx}
            className='flex flex-col justify-between border border-t-4 px-3 pt-3 pb-1 shadow-md'
          >
            <div className='flex flex-col'>
              <img
                src={urlToImage || PlaceholderImage}
                alt={title}
                className='mb-1 h-56 w-full object-cover sm:h-44'
              />

              <p className='mb-2 text-sm font-bold text-red-500'>{name}</p>

              <h2 className='mb-2 font-bold leading-tight'>{title}</h2>

              <p className='text-sm text-gray-500'>{description}</p>
            </div>

            <div className='flex flex-col gap-4 pt-5'>
              <button
                onClick={() => {}}
                className='mx-auto mt-2 w-fit border border-gray-600 px-8 py-2 text-xs text-gray-600 transition-shadow hover:shadow-md'
              >
                READ MORE
              </button>

              <p className='text-center text-xs font-semibold text-gray-400 '>
                {formatDate(publishedAt)}
              </p>
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default Tiles;
