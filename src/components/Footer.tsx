import { Link } from 'react-router-dom';

const Footer = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMin = currentDate.getMinutes();
  const hoursMin =
    (currentHour <= 9 ? `0${currentHour}` : currentHour) +
    ':' +
    (currentMin <= 9 ? `0${currentMin}` : currentMin);

  const articlesCount = 0;

  return (
    <footer className='bg-zinc-900 pb-6 text-center text-white'>
      <Link to='/'>
        <h2 className='py-10 text-4xl font-bold transition-transform hover:scale-105'>
          <span className='text-lime-500'>gn</span>News
        </h2>
      </Link>

      <p>{hoursMin}</p>

      <p>Liczba dostępnych artykułów: {articlesCount}</p>
    </footer>
  );
};

export default Footer;
