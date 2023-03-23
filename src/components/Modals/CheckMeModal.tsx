import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { toggleModal } from '../../Redux/slices/checkMe';
import ModalTemplate from './ModalTemplate';

const CheckMeModal = () => {
  const isOpen = useAppSelector((state) => state.checkMe);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <ModalTemplate toggleModal={() => dispatch(toggleModal())}>
      <div className='p-4'>Największą trudność sprawiło mi:</div>
    </ModalTemplate>
  );
};

export default CheckMeModal;
