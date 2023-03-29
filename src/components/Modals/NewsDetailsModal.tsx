import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/newsDetails';
import { formatDate } from '../../utils/formatDate';
import translate from '../../i18n/translate';
import PlaceholderImage from '../../assets/placeholder-image.jpg';
import SourceBadge from '../SourceBadge';
import Template from './Template';

const NewsDetailsModal = () => {
  const modalState = useAppSelector((state) => state.newsDetails);
  const dispatch = useAppDispatch();

  if (!modalState.isOpen || !modalState.news) return null;

  const { author, publishedAt, source, url, title, content, image } = modalState.news;

  return (
    <Template toggleModal={() => dispatch(toggleModal())}>
      <div className='relative flex max-h-64 items-center overflow-hidden sm:max-h-[calc(100vh-240px)]'>
        <div className='absolute top-0 pl-2'>
          <SourceBadge label={source.name} />
        </div>

        <img
          src={image || PlaceholderImage}
          alt={title}
          className='h-full w-full object-contain'
        />
      </div>

      <div className='p-2 leading-5 sm:px-6 sm:py-4 lg:px-8 lg:py-6'>
        <h2 className='font-semibold'>{title}</h2>

        <p className='py-2 text-sm text-gray-600 dark:text-gray-300'>{content}</p>

        <p className='text-xs italic text-cyan-800 dark:text-cyan-600'>
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

        <p className='text-xs italic text-cyan-800 dark:text-cyan-600'>
          <span className='font-bold'>{translate('author')}</span> {author || 'unknown'}
        </p>

        <p className='text-center text-xs font-semibold text-gray-400 dark:text-gray-300'>
          {formatDate(publishedAt)}
        </p>
      </div>
    </Template>
  );
};

export default NewsDetailsModal;
