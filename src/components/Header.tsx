// <img src='https://flagsapi.com/BR/flat/64.png'></img>;
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='max-w-5xl mx-auto py-6 border-b border-gray-300 px-4 flex items-center justify-between gap-3'>
      <Link
        to='/'
        className='font-bold text-3xl'
      >
        <h1 className='hover:scale-105 transition-transform origin-center'>
          <span className='text-lime-500'>gn</span>News
        </h1>
      </Link>

      <div className='flex gap-2'>
        <button>Widok</button>

        <button>Popup</button>

        <button>Hamburger</button>
      </div>
    </header>
  );
};

export default Header;
