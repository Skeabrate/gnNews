import React from 'react';
import ReactDOM from 'react-dom/client';
import I18nProvider from './i18n/provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { loader as countryLoader } from './pages/Country';
import { loader as homeLoader } from './pages/Home';
import Country from './pages/Country';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import App from './app';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      <Provider store={setupStore()}>
        <I18nProvider>
          <RouterProvider router={router} />
        </I18nProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
