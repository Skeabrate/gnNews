import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import { store } from '../Redux/store';
import { Provider } from 'react-redux';
import { scrollToTopOnPathChange } from '../hooks/useScrollToTopOnPathChange';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import NewsDetailsModal from '../components/NewsDetailsModal';

const queryClient = new QueryClient();

export default function Root() {
  scrollToTopOnPathChange();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <NewsDetailsModal /> */}

        <Header />

        <div className='mx-auto grid max-w-6xl px-2 py-12 sm:grid-cols-[200px,1fr] sm:px-4 md:px-6'>
          <SideMenu />

          <main>
            <Outlet />
          </main>
        </div>

        <Footer />
      </Provider>
    </QueryClientProvider>
  );
}
