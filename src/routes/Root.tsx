import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-12'>
        <Outlet />
      </main>

      <Footer />
    </QueryClientProvider>
  );
}
