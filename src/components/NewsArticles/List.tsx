import { TArticle } from '../../types/article';
import { formatDate } from '../../utils/formatDate';

const List = ({ articles }: { articles: TArticle[] }) => {
  return (
    <div className='grid gap-5'>
      {articles.map(({ author, publishedAt, title, source: { name }, url, content }, idx) => (
        <article key={idx}>
          <button
            className='w-full border cursor-pointer border-t-2 px-4 pt-2 pb-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between'
            onClick={() => {}}
          >
            <p className='text-xs font-semibold text-gray-400'>{formatDate(publishedAt)}</p>

            <p className='text-red-500 font-bold text-sm mb-2'>{name}</p>

            <h2 className='font-semibold leading-tight text-left'>{title}</h2>
          </button>
        </article>
      ))}
    </div>
  );
};

export default List;
