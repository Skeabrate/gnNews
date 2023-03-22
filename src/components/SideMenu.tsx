import { Link } from 'react-router-dom';
import { COUNTRIES } from '../utils/countries';

const SideMenu = () => {
  return (
    <nav className='bg-white sm:pb-4 sm:mr-4 sm:static absolute'>
      <button className='h-12 w-full bg-lime-500 text-white sm:cursor-default font-bold text-sm leading-none'>
        <h2>Chose Country:</h2>
      </button>

      <ul className='flex sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto flex-col gap-1 pr-4'>
        {COUNTRIES.map(({ code, name }) => (
          <li key={code}>
            <Link
              className='flex items-center gap-3 border-t border-gray-200 hover:bg-gray-200 transition-colors duration-75 py-2'
              to={`/country/${code.toLowerCase()}`}
            >
              <img
                src={`https://flagsapi.com/${code}/flat/32.png`}
                alt={name}
              />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
