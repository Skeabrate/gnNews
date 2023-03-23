import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { toggleModal } from '../Redux/slices/newsDetails';
import PlaceholderImage from '../assets/placeholder-image.jpg';
import SourceBadge from './SourceBadge';
import { formatDate } from '../utils/formatDate';

const NewsDetailsModal = ({}) => {
  const modalState = useAppSelector((state) => state.newsDetails);
  const dispatch = useAppDispatch();

  if (!modalState.isOpen || !modalState.news) return null;

  const { author, publishedAt, source, url, title, content, urlToImage } = modalState.news;

  return (
    <div className='fixed inset-0 z-50 flex h-full w-full animate-fadeIn items-center justify-center'>
      <button
        onClick={() => dispatch(toggleModal())}
        className='absolute inset-0 h-full w-full cursor-default bg-gray-600 opacity-30'
      ></button>

      <div className='max-w-screen z-10 mx-4 w-full bg-white shadow-md sm:w-fit sm:max-w-lg '>
        <div className='relative flex'>
          <div className='absolute pl-2'>
            <SourceBadge label={source.name} />
          </div>

          <button
            onClick={() => dispatch(toggleModal())}
            className='absolute right-0 top-0 p-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              className=' fill-white'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z' />
            </svg>
          </button>

          <img
            src={urlToImage || PlaceholderImage}
            alt={title}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='p-2 leading-5'>
          <h2 className='font-semibold'>{title}</h2>

          <p className='py-2 text-sm text-gray-600'>{content}</p>

          <p className='text-xs italic text-cyan-800'>
            <span className='font-bold'>Source:</span>
            {url ? (
              <a
                className='ml-1 break-words underline'
                target='_blank'
                rel='noopener noreferrer'
                href={url}
              >
                {url}
              </a>
            ) : (
              'unknown'
            )}
          </p>

          <p className='text-xs italic text-cyan-800'>
            <span className='font-bold'>Author:</span> {author || 'unknown'}
          </p>

          <p className='text-center text-xs font-semibold text-gray-400 '>
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsModal;
