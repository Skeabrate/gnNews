import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/checkMe';
import Template from './Template';

const CheckMeModal = () => {
  const isOpen = useAppSelector((state) => state.checkMe);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <Template toggleModal={() => dispatch(toggleModal())}>
      <div className='p-6 pt-16'>
        Wykonując to zadanie nie napotkałem żadnych większych trudności. Są to technologie, w
        których tworzę projekty na co dzień, często wykorzystuję też Next.js czy Gatsby. Ciesze się,
        że robiąc to zadanie mogłem odświeżyć sobie np. bibliotekę react-router-dom oraz jej
        integrację z react-query. Nowością była dla mnie biblioteka Format.js, ale wdrażanie jej do
        projektu było proste i przyjemne. Ewentualne możliwości rozwoju strony, jakie widzę to np.:
        paginacja artykułów (podział na strony lub infinite scroll), pobieranie artykułów po stronie
        serwera (SSR) w celu poprawy SEO, jednak w tym celu wykorzystałbym już raczej Nextjs.
      </div>
    </Template>
  );
};

export default CheckMeModal;
