import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';
import PlaceholderImage from '../../assets/placeholder-image.jpg';

const Tiles = ({ articles }: { articles: TArticle[] }) => {
  return (
    <div className='grid sm:grid-cols-fluid gap-x-6 gap-y-8'>
      {articles.map(
        (
          { author, publishedAt, title, urlToImage, source: { name }, url, content, description },
          idx
        ) => (
          <article
            key={idx}
            className='border border-t-4 px-3 pt-3 pb-1 shadow-md flex flex-col justify-between'
          >
            <div className='flex flex-col'>
              <img
                src={urlToImage || PlaceholderImage}
                alt={title}
                className='h-56 sm:h-44 object-cover w-full mb-1'
              />

              <p className='text-red-500 font-bold text-sm mb-2'>{name}</p>

              <h2 className='font-bold leading-tight mb-2'>{title}</h2>

              <p className='text-gray-500 text-sm'>{description}</p>
            </div>

            <div className='flex flex-col gap-4 pt-5'>
              <button
                onClick={() => {}}
                className='hover:shadow-md transition-shadow border border-gray-600 text-gray-600 text-xs px-8 py-2 mt-2 w-fit mx-auto'
              >
                READ MORE
              </button>

              <p className='text-xs font-semibold text-gray-400 text-center '>
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
