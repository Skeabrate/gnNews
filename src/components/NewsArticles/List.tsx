import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';

const List = ({ articles }: { articles: TArticle[] }) => {
  return (
    <div className='grid animate-fadeIn gap-5 opacity-0'>
      {articles.map(({ author, publishedAt, title, source: { name }, url, content }, idx) => (
        <article key={idx}>
          <button
            className='flex w-full cursor-pointer flex-col justify-between border border-t-2 px-4 pt-2 pb-4 shadow-sm transition-shadow hover:shadow-md'
            onClick={() => {}}
          >
            <p className='text-xs font-semibold text-gray-400'>{formatDate(publishedAt)}</p>

            <p className='my-2 w-fit bg-gradient-to-r from-zinc-500 to-zinc-400 px-2 py-1 text-xs font-semibold text-white'>
              {name}
            </p>

            <h2 className='text-left font-semibold leading-tight'>{title}</h2>
          </button>
        </article>
      ))}
    </div>
  );
};

export default List;
