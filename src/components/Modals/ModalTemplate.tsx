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
        className='absolute inset-0 h-full w-full cursor-default bg-gray-700 opacity-50'
      ></button>

      <div className='z-10 w-11/12 bg-white shadow-md sm:w-2/3 sm:max-w-4xl'>{children}</div>
    </div>
  );
};

export default ModalTemplate;
