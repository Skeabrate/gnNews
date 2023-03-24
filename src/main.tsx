import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { loader as countryLoader } from './pages/Country';
import { loader as homeLoader } from './pages/Home';
import './index.css';
import Country from './pages/Country';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Root from './pages/Root';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: 'country/:code',
        element: <Country />,
        loader: countryLoader(queryClient),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
