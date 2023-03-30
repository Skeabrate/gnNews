import { Link } from 'react-router-dom';
import { FormattedTime } from 'react-intl';
import { useAppSelector } from '../redux/hooks';
import translate from '../i18n/translate';
import Waves from './Waves/Waves';

const Footer = () => {
  const articlesCount = useAppSelector((state) => state.articlesCount);
  const getDate = () => new Date();

  return (
    <footer className='relative bg-zinc-900 pb-6 text-center text-white dark:bg-black'>
      <div className='relative z-30 flex flex-col items-center'>
        <Link to='/'>
          <h2 className='mx-auto py-10 text-4xl font-bold transition-transform hover:scale-105 sm:py-14'>
            <span className='text-brand'>gn</span>News
          </h2>
        </Link>
        <p className='font-bold'>
          <FormattedTime value={getDate()} />
        </p>
        <p>
          {translate('footer')} <span className='font-bold'>{articlesCount}</span>
        </p>
        <p className='mt-3 text-sm'>
          Made by
          <a
            className='ml-1 font-bold'
            href='https://github.com/Skeabrate'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sebastian Świeczkowski
          </a>
        </p>
      </div>

      <Waves isStorm />
    </footer>
  );
};

export default Footer;
