import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <SideMenu />

      <main className='max-w-6xl mx-auto px-2 sm:px-4 py-12'>
        <Outlet />
      </main>

      <Footer />
    </QueryClientProvider>
  );
}
