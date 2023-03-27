import { Outlet } from 'react-router-dom';
import { scrollToTopOnPathChange } from './hooks/useScrollToTopOnPathChange';
import Footer from './components/Footer';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import NewsDetailsModal from './components/Modals/NewsDetailsModal';
import CheckMeModal from './components/Modals/CheckMeModal';

export default function App() {
  scrollToTopOnPathChange();

  return (
    <>
      <NewsDetailsModal />
      <CheckMeModal />

      <Header />

      <div className='mx-auto grid max-w-6xl px-2 py-12 sm:grid-cols-[200px,1fr] sm:px-4 md:px-6'>
        <SideMenu />

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
