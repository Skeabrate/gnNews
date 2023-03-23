const ModalTemplate = ({
  children,
  toggleModal,
}: {
  children: React.ReactNode;
  toggleModal: () => void;
}) => {
  return (
    <div className='fixed inset-0 z-50 flex h-full w-full items-center justify-center'>
      <button
        onClick={toggleModal}
        className='absolute inset-0 h-full w-full cursor-default bg-gray-300/50 backdrop-blur-[10px] backdrop-filter'
      ></button>

      <div className='z-10 w-11/12 animate-fadeInModal bg-white shadow-md sm:w-5/6 sm:max-w-4xl'>
        {children}
      </div>
    </div>
  );
};

export default ModalTemplate;
