import { Link } from 'react-router-dom';
import ChangeView from './ChangeView';

const Header = () => {
  return (
    <header className='max-w-6xl mx-auto py-4 sm:py-6 border-b border-gray-300 px-2 sm:px-4 flex items-center justify-between gap-3'>
      <Link
        to='/'
        className='font-bold text-3xl'
      >
        <h1 className='hover:scale-105 transition-transform origin-center'>
          <span className='text-lime-500'>gn</span>News
        </h1>
      </Link>

      <div className='flex gap-3'>
        <button className='border px-3'>Popup</button>

        <ChangeView />
      </div>
    </header>
  );
};

export default Header;
