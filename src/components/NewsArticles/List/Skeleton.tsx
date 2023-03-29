import cx from 'classnames';

const Skeleton = () => {
  return (
    <div className='grid animate-fadeIn gap-5 opacity-0'>
      {new Array(10).fill('bone').map((bone, idx) => (
        <div
          className='animate-pulse bg-gray-100 px-4 pt-2 pb-4 dark:bg-zinc-900'
          key={idx}
        >
          <p className='h-4 w-16 bg-gray-300 dark:bg-zinc-700'></p>
          <p className='my-2 h-6 w-28 bg-gray-400 dark:bg-black'></p>
          <p
            className={cx('mb-1 h-5 w-11/12 bg-gray-300 dark:bg-zinc-700', idx % 2 && 'w-5/6')}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
