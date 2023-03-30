const Template = ({
  children,
  blackButton,
  toggleModal,
}: {
  children: React.ReactNode;
  blackButton?: boolean;
  toggleModal: () => void;
}) => {
  return (
    <div className='fixed inset-0 z-50 flex h-full w-full items-center justify-center'>
      <button
        aria-label='close modal'
        onClick={toggleModal}
        className='absolute inset-0 h-full w-full cursor-default bg-gray-300/50 backdrop-blur-[10px] backdrop-filter dark:bg-gray-600/50'
      ></button>

      <div className='relative z-10 w-11/12 animate-fadeInModal bg-white shadow-md dark:bg-zinc-900 sm:w-5/6 sm:max-w-4xl'>
        <button
          aria-label='close modal svg'
          onClick={toggleModal}
          className='absolute right-0 top-0 z-10 p-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            className={blackButton ? 'fill-black dark:fill-white' : 'fill-white'}
          >
            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z' />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Template;
