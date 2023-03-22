import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';
import Header from './../components/Header';

export default function Root() {
  return (
    <>
      <Header />

      <main className='max-w-4xl mx-auto px-4'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
