import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import { store } from '../Redux/store';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />

        <div className='grid sm:grid-cols-[200px,1fr] max-w-6xl mx-auto px-2 sm:px-4 py-12'>
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
