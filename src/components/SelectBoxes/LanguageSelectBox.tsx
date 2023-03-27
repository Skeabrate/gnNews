import { useMemo } from 'react';
import { LOCALES } from '../../i18n/locales';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { changeLanguage } from '../../Redux/slices/i18n';
import { getCountryCode } from '../../utils/getCountryCode';
import Template from './Template';
import Flag from '../Flag';

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
  const language = useAppSelector((state) => state.i18n);

  const initialItem = useMemo(() => languages.find((lang) => lang.id === language), [language]);

  return (
    <Template
      items={languages}
      initialItem={initialItem}
      onChange={(selectedItem) => dispatch(changeLanguage(selectedItem))}
    />
  );
};

export default LanguageSelectBox;
