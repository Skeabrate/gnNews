import { Link } from 'react-router-dom';
import CheckMeButton from './CheckMeButton';
import LanguageSelectBox from './SelectBoxes/LanguageSelectBox';
import ThemeSelectBox from './SelectBoxes/ThemeSelectBox';
import ViewSelectBox from './SelectBoxes/ViewSelectBox';

const Header = () => {
  return (
    <header className='border-b border-gray-300 bg-zinc-50 shadow-md dark:border-black dark:bg-zinc-900 '>
      <nav className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-4 px-2 sm:flex-row sm:py-6 sm:px-4 md:px-6'>
        <Link
          to='/'
          className='origin-center text-3xl font-bold transition-transform hover:scale-105'
        >
          <span className='text-brand'>gn</span>News
        </Link>

        <ul className='flex flex-wrap justify-center gap-3 gap-y-2'>
          <li>
            <CheckMeButton />
          </li>
          <li>
            <ThemeSelectBox />
          </li>
          <li>
            <LanguageSelectBox />
          </li>
          <li>
            <ViewSelectBox />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
