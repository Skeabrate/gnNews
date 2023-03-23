const ModalTemplate = ({
  children,
  toggleModal,
}: {
  children: React.ReactNode;
  toggleModal: () => void;
}) => {
  return (
    <div className='fixed inset-0 z-50 flex h-full w-full animate-fadeIn items-center justify-center'>
      <button
        onClick={toggleModal}
        className='absolute inset-0 h-full w-full cursor-default bg-gray-600 opacity-30'
      ></button>

      <div className='max-w-screen z-10 mx-4 w-full bg-white shadow-md sm:w-fit sm:max-w-lg '>
        {children}
      </div>
    </div>
  );
};

export default ModalTemplate;
