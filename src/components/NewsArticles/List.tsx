import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';

const List = ({ articles }: { articles: TArticle[] }) => {
  return (
    <div className='grid gap-5'>
      {articles.map(({ author, publishedAt, title, source: { name }, url, content }, idx) => (
        <article key={idx}>
          <button
            className='flex w-full cursor-pointer flex-col justify-between border border-t-2 px-4 pt-2 pb-4 shadow-sm transition-shadow hover:shadow-md'
            onClick={() => {}}
          >
            <p className='text-xs font-semibold text-gray-400'>{formatDate(publishedAt)}</p>

            <p className='mb-2 text-sm font-bold text-red-500'>{name}</p>

            <h2 className='text-left font-semibold leading-tight'>{title}</h2>
          </button>
        </article>
      ))}
    </div>
  );
};

export default List;
