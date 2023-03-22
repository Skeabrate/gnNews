import { Link } from 'react-router-dom';
import ChangeView from './ChangeView';

const Header = () => {
  return (
    <header className='mx-auto flex max-w-6xl items-center justify-between gap-3 border-b border-gray-300 py-4 px-2 sm:py-6 sm:px-4'>
      <Link
        to='/'
        className='text-3xl font-bold'
      >
        <h1 className='origin-center transition-transform hover:scale-105'>
          <span className='text-brand'>gn</span>News
        </h1>
      </Link>

      <div className='flex gap-3'>
        <button className='border border-gray-300 px-3'>Popup</button>

        <ChangeView />
      </div>
    </header>
  );
};

export default Header;
