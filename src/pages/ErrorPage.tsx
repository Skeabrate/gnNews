import { useRouteError } from 'react-router-dom';

type TError = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError();
  const { statusText, message } = error as TError;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-lg'>
      <h1 className='mb-12 text-6xl font-extrabold'>Oops!</h1>
      <p className='mb-6'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='font-bold text-gray-500'>{statusText || message}</i>
      </p>
    </main>
  );
}
