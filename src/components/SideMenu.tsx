import { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { COUNTRIES } from '../utils/countries';

const SideMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive((isActive) => !isActive);

  return (
    <>
      <button
        onClick={toggleMenu}
        className='sm:hidden absolute right-3 bg-lime-500 text-white text-xs font-bold px-4 py-2 leading-3 mt-1'
      >
        Chose <br />
        Country
      </button>

      <nav
        className={cx(
          'bg-white sm:pb-4 sm:mr-4 sm:static fixed sm:overflow-clip sm:w-fit right-0 transition-transform duration-500 -translate-x-full sm:translate-x-0 w-full top-0 h-full overflow-y-auto',
          isMenuActive && 'translate-x-0'
        )}
      >
        <div className='h-12 w-full flex bg-lime-500 text-white sm:cursor-default font-bold text-sm leading-none'>
          <p className='flex items-center justify-center w-full'>Chose Country:</p>

          <button
            onClick={toggleMenu}
            className='sm:hidden h-8 my-auto w-10 mr-2 bg-white text-black '
          >
            X
          </button>
        </div>

        <ul className='flex sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto flex-col gap-1 sm:pr-4 sm:pl-0 px-3'>
          {COUNTRIES.map(({ code, name }) => (
            <li key={code}>
              <Link
                className='flex items-center gap-3 px-2 sm:px-0 border-t border-gray-200 hover:bg-gray-200 transition-colors duration-75 py-2'
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
    </>
  );
};

export default SideMenu;
