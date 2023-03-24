import { Link } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks';
import translate from '../i18n/translate';

const Footer = () => {
  const articlesCount = useAppSelector((state) => state.articlesCount);

  const getDate = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();

    return (
      (currentHour <= 9 ? `0${currentHour}` : currentHour) +
      ':' +
      (currentMin <= 9 ? `0${currentMin}` : currentMin)
    );
  };

  return (
    <footer className='relative bg-zinc-900 pb-6 text-center text-white'>
      <div className='relative z-30'>
        <Link to='/'>
          <h2 className='mx-auto w-fit py-10 text-4xl font-bold transition-transform hover:scale-105'>
            <span className='text-brand'>gn</span>News
          </h2>
        </Link>
        <p className='font-bold'>{getDate()}</p>
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
