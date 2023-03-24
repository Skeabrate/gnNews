import { LOCALES } from '../../i18n/locales';
import { useAppDispatch } from '../../Redux/hooks';
import { changeLanguage } from '../../Redux/slices/i18n';
import { getCountryCode } from '../../utils/getCountryCode';
import Flag from '../Flag';
import Template from './Template';

const languages = Object.values(LOCALES).map((lang) => ({
  id: lang,
  label: (
    <>
      <Flag code={getCountryCode(lang)} />
      {getCountryCode(lang).toUpperCase()}
    </>
  ),
}));

const LanguageSelectBox = () => {
  const dispatch = useAppDispatch();

  return (
    <Template
      items={languages}
      onChange={(selectedItem) => dispatch(changeLanguage(selectedItem))}
    />
  );
};

export default LanguageSelectBox;
