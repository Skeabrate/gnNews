import { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { COUNTRIES } from '../utils/countries';
import translate from '../i18n/translate';
import Flag from './Flag';

const SideMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive((isActive) => !isActive);

  return (
    <>
      <button
        onClick={toggleMenu}
        className='absolute right-3 mt-1 w-20 bg-brandDarker px-4 py-2 text-xs font-bold leading-3 text-white sm:hidden'
      >
        {translate('sideMenuLabel')}
      </button>

      <aside
        className={cx(
          'fixed right-0 top-0 z-40 h-full w-full -translate-x-full overflow-y-auto bg-white transition-transform duration-500 dark:bg-zinc-800 sm:static sm:mr-4 sm:w-fit sm:translate-x-0 sm:overflow-clip sm:pb-4',
          isMenuActive && 'translate-x-0'
        )}
      >
        <div className='relative flex h-16 w-full bg-gradient-to-r from-brandDarker to-brand font-bold leading-none text-white sm:cursor-default'>
          <p className='flex w-full items-center justify-center'>{translate('sideMenuLabel')}</p>

          <button
            aria-label='close side menu'
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

        <ul className='custom-scrollbar flex flex-col px-3 sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto sm:pr-4 sm:pl-0'>
          {COUNTRIES.map(({ code, name }, idx) => (
            <li key={code}>
              <Link
                className={cx(
                  'flex items-center gap-3 border-t border-gray-200 px-2 py-3 text-sm transition-colors duration-75 hover:bg-gray-200 dark:border-zinc-700 dark:hover:bg-zinc-900',
                  !idx && 'border-t-0'
                )}
                to={`/country/${code.toLowerCase()}`}
                onClick={toggleMenu}
              >
                <Flag code={code} />
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideMenu;
