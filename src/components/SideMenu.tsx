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
        className='absolute right-3 mt-1 bg-lime-500 px-4 py-2 text-xs font-bold leading-3 text-white sm:hidden'
      >
        Chose <br />
        Country
      </button>

      <nav
        className={cx(
          'fixed right-0 top-0 h-full w-full -translate-x-full overflow-y-auto bg-white transition-transform duration-500 sm:static sm:mr-4 sm:w-fit sm:translate-x-0 sm:overflow-clip sm:pb-4',
          isMenuActive && 'translate-x-0'
        )}
      >
        <div className='flex h-12 w-full bg-lime-500 text-sm font-bold leading-none text-white sm:cursor-default'>
          <p className='flex w-full items-center justify-center'>Chose Country:</p>

          <button
            onClick={toggleMenu}
            className='my-auto mr-2 h-8 w-10 bg-white text-black sm:hidden '
          >
            X
          </button>
        </div>

        <ul className='flex flex-col gap-1 px-3 sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto sm:pr-4 sm:pl-0'>
          {COUNTRIES.map(({ code, name }) => (
            <li key={code}>
              <Link
                className='flex items-center gap-3 border-t border-gray-200 px-2 py-2 transition-colors duration-75 hover:bg-gray-200 sm:px-0'
                to={`/country/${code.toLowerCase()}`}
                onClick={toggleMenu}
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
