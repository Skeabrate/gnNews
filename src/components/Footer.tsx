import { Link } from 'react-router-dom';
import { FormattedTime } from 'react-intl';
import { useAppSelector } from '../Redux/hooks';
import translate from '../i18n/translate';

const Footer = () => {
  const articlesCount = useAppSelector((state) => state.articlesCount);
  const getDate = () => new Date();

  return (
    <footer className='relative bg-zinc-900 dark:bg-black pb-6 text-center text-white'>
      <div className='relative z-30'>
        <Link to='/'>
          <h2 className='mx-auto w-fit py-10 text-4xl font-bold transition-transform hover:scale-105'>
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

      <div className='absolute bottom-0 left-0 right-0 h-20 w-full overflow-x-hidden'>
        <div className='waveBg bg-wave absolute h-full w-[200%] translate-x-0 translate-y-0 animate-moveWaveFirst opacity-80'></div>
        <div className='waveBg bg-wave absolute h-full w-[200%] translate-x-0 translate-y-0 animate-moveWaveSecond opacity-50'></div>
        <div className='waveBg bg-wave absolute h-full w-[200%] translate-x-0 translate-y-0 animate-moveWaveThird opacity-50'></div>
      </div>
    </footer>
  );
};

export default Footer;
