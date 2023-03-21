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
    <footer className='bg-black text-white text-center pt-12 pb-6'>
      <h2 className='font-bold text-3xl pb-6'>GnNews</h2>

      <p>{hoursMin}</p>

      <p>Liczba dostępnych artykułów: {articlesCount}</p>
    </footer>
  );
};

export default Footer;
