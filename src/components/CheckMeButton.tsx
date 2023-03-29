import translate from '../i18n/translate';
import { useAppDispatch } from '../Redux/hooks';
import { toggleModal } from '../Redux/slices/checkMe';
import Waves from './Waves/Waves';

const CheckMeButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleModal())}
      className='relative h-12  overflow-hidden border border-gray-300 bg-black px-3 text-sm font-bold text-white dark:border-black'
    >
      {translate('checkMe')}

      <Waves />
    </button>
  );
};

export default CheckMeButton;
