import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-lg'>
      <h1 className='mb-12 text-6xl font-extrabold'>Oops!</h1>
      <p className='mb-6'>Sorry, an unexpected error has occurred.</p>
      <p>
        {/*  @ts-ignore */}
        <i className='font-bold text-gray-500'>{error.statusText || error.message}</i>
      </p>
    </main>
  );
}
