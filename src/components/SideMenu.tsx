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
        className='absolute right-3 mt-1 bg-brandDarker px-4 py-2 text-xs font-bold leading-3 text-white sm:hidden'
      >
        Choose <br />
        Country
      </button>

      <nav
        className={cx(
          'fixed right-0 top-0 z-30 h-full w-full -translate-x-full overflow-y-auto bg-white transition-transform duration-500 sm:static sm:mr-4 sm:w-fit sm:translate-x-0 sm:overflow-clip sm:pb-4',
          isMenuActive && 'translate-x-0'
        )}
      >
        <div className='relative flex h-16 w-full bg-gradient-to-r from-brandDarker to-brand font-bold leading-none text-white sm:cursor-default'>
          <p className='flex w-full items-center justify-center'>Chose Country:</p>

          <button
            onClick={toggleMenu}
            className='absolute right-0 top-1/2 -translate-y-1/2 sm:hidden '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              className='mr-4 fill-white'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z' />
            </svg>
          </button>
        </div>

        <ul className='custom-scrollbar flex flex-col gap-1 px-3 sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto sm:pr-4 sm:pl-0'>
          {COUNTRIES.map(({ code, name }) => (
            <li key={code}>
              <Link
                className='flex items-center gap-3 border-t border-gray-200 px-2 py-2 text-sm transition-colors duration-75 hover:bg-gray-200'
                to={`/country/${code.toLowerCase()}`}
                onClick={toggleMenu}
              >
                <img
                  src={`https://flagsapi.com/${code}/flat/32.png`}
                  alt={name}
                  height='32'
                  width='32'
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
