import { useAppDispatch, useAppSelector } from '../../redux-tk/hooks';
import { toggleModal } from '../../redux-tk/slices/checkMe';
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
