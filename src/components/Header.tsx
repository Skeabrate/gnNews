import { Link } from 'react-router-dom';
import ChangeView from './ChangeView';

const Header = () => {
  return (
    <header className='border-b border-gray-300 bg-zinc-50 shadow-md '>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-3 py-4 px-2 sm:py-6 sm:px-4 md:px-6'>
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
            Check Me!
          </button>

          <ChangeView />
        </div>
      </div>
    </header>
  );
};

export default Header;
