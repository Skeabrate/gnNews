import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { toggleModal } from '../../Redux/slices/newsDetails';
import { formatDate } from '../../utils/formatDate';
import translate from '../../i18n/translate';
import PlaceholderImage from '../../assets/placeholder-image.jpg';
import SourceBadge from '../SourceBadge';
import ModalTemplate from './ModalTemplate';

const NewsDetailsModal = ({}) => {
  const modalState = useAppSelector((state) => state.newsDetails);
  const dispatch = useAppDispatch();

  if (!modalState.isOpen || !modalState.news) return null;

  const { author, publishedAt, source, url, title, content, image } = modalState.news;

  return (
    <ModalTemplate toggleModal={() => dispatch(toggleModal())}>
      <div className='relative flex max-h-64 items-center overflow-hidden sm:max-h-[calc(100vh-240px)]'>
        <div className='absolute top-0 pl-2'>
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
          src={image || PlaceholderImage}
          alt={title}
          className='h-full w-full object-contain'
        />
      </div>

      <div className='p-2 leading-5 sm:px-6 sm:py-4 lg:px-8 lg:py-6'>
        <h2 className='font-semibold'>{title}</h2>

        <p className='py-2 text-sm text-gray-600'>{content}</p>

        <p className='text-xs italic text-cyan-800'>
          <span className='font-bold'>{translate('source')}</span>
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
          <span className='font-bold'>{translate('author')}</span> {author || 'unknown'}
        </p>

        <p className='text-center text-xs font-semibold text-gray-400 '>
          {formatDate(publishedAt)}
        </p>
      </div>
    </ModalTemplate>
  );
};

export default NewsDetailsModal;
