import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { toggleModal } from '../../Redux/slices/checkMe';
import Template from './Template';

const CheckMeModal = () => {
  const isOpen = useAppSelector((state) => state.checkMe);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <Template toggleModal={() => dispatch(toggleModal())}>
      <div className='p-4'>Największą trudność sprawiło mi:</div>
    </Template>
  );
};

export default CheckMeModal;
