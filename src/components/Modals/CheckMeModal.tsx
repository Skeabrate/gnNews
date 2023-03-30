import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/checkMe';
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
