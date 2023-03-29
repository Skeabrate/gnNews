const Skeleton = () => {
  return (
    <div className='grid animate-fadeIn gap-x-6 gap-y-8 md:grid-cols-2'>
      {new Array(10).fill('bone').map((bone, idx) => (
        <div
          className='big-tile flex animate-pulse flex-col justify-between bg-gray-100 px-3 pt-3 pb-1 dark:bg-zinc-900 lg:[&:nth-child(5n+1)]:col-span-2 lg:[&:nth-child(5n+6)]:mt-12'
          key={idx}
        >
          {/* Nested divs to achieve big-tile height (img placeholder) from index.css */}
          <div>
            <div className='h-56 w-full bg-gray-300 dark:bg-zinc-700'></div>
          </div>

          {/* source badge */}
          <p className='my-3 h-6 w-28 bg-gray-400 dark:bg-black'></p>

          {/* title */}
          <p className='mb-3 h-5 w-3/4 bg-gray-300 dark:bg-zinc-700'></p>

          {/* description */}
          <p className='mb-1 h-4 w-full bg-gray-300 dark:bg-zinc-700'></p>
          <p className='mb-1 h-4 w-full bg-gray-300 dark:bg-zinc-700'></p>
          <p className='mb-5 h-4 w-5/6 bg-gray-300 dark:bg-zinc-700'></p>

          {/* read more button */}
          <p className='mx-auto mb-3 h-8 w-32 bg-gray-500 dark:bg-black'></p>

          {/* date */}
          <p className='mx-auto h-4 w-16 bg-gray-300 dark:bg-zinc-700'></p>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
