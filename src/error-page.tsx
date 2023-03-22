import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-lg'>
      <h1 className='mb-12 font-extrabold text-6xl'>Oops!</h1>
      <p className='mb-6'>Sorry, an unexpected error has occurred.</p>
      <p>
        {/*  @ts-ignore */}
        <i className='text-gray-500 font-bold'>{error.statusText || error.message}</i>
      </p>
    </main>
  );
}
