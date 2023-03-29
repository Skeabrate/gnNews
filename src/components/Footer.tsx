import { Link } from 'react-router-dom';
import { FormattedTime } from 'react-intl';
import { useAppSelector } from '../Redux/hooks';
import translate from '../i18n/translate';
import Waves from './Waves/Waves';

const Footer = () => {
  const articlesCount = useAppSelector((state) => state.articlesCount);
  const getDate = () => new Date();

  return (
    <footer className='relative bg-zinc-900 pb-6 text-center text-white dark:bg-black'>
      <div className='relative z-30 flex flex-col items-center'>
        <Link to='/'>
          <h2 className='mx-auto py-14 text-4xl font-bold transition-transform hover:scale-105'>
            <span className='text-brand'>gn</span>News
          </h2>
        </Link>
        <p className='font-bold'>
          <FormattedTime value={getDate()} />
        </p>
        <p>
          {translate('footer')} <span className='font-bold'>{articlesCount}</span>
        </p>
      </div>

      <Waves isStorm />
    </footer>
  );
};

export default Footer;
