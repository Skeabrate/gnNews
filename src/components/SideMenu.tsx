import { Link } from 'react-router-dom';
import { COUNTRIES } from '../utils/countries';

const SideMenu = () => {
  return (
    <nav>
      <h2>Chose country:</h2>

      <ul className='flex flex-col gap-1'>
        {COUNTRIES.map(({ code, name }) => (
          <li key={code}>
            <Link
              className='flex items-center gap-1'
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
