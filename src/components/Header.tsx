import { Link } from 'react-router-dom';
import { LOCALES } from '../i18n/locales';
import translate from '../i18n/translate';
import { useAppDispatch } from '../Redux/hooks';
import { toggleModal } from '../Redux/slices/checkMe';
import { changeLanguage } from '../Redux/slices/i18n';
import ChangeView from './ChangeView';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleChangeLanguage = (code: string) => dispatch(changeLanguage(code));

  return (
    <header className='border-b border-gray-300 bg-zinc-50 shadow-md '>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-4 px-2 sm:flex-row sm:py-6 sm:px-4 md:px-6'>
        <Link
          to='/'
          className='text-3xl font-bold'
        >
          <h1 className='origin-center transition-transform hover:scale-105'>
            <span className='text-brand'>gn</span>News
          </h1>
        </Link>

        <div className='flex gap-3'>
          <button className='border border-gray-300 bg-black px-3 text-sm font-bold text-white'>
            Theme
          </button>

          {Object.values(LOCALES).map((country) => (
            <button
              key={country}
              className='border border-gray-300 bg-black px-3 text-sm font-bold text-white'
              onClick={() => handleChangeLanguage(country)}
            >
              {country}
            </button>
          ))}

          <button
            onClick={() => dispatch(toggleModal())}
            className='border border-gray-300 bg-black px-3 text-sm font-bold text-white'
          >
            {translate('checkMe')}
          </button>

          <ChangeView />
        </div>
      </div>
    </header>
  );
};

export default Header;
