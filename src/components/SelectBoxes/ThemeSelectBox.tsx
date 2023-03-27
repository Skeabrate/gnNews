import { useTheme } from '../../hooks/useTheme';
import { THEME_VARIANTS } from '../../utils/themeVariants';
import Template from './Template';

const ThemeSelectBox = () => {
  const { setCurrentTheme, initialTheme } = useTheme();

  return (
    <Template
      items={THEME_VARIANTS}
      initialItem={initialTheme}
      onChange={(selectedItem) => setCurrentTheme(selectedItem)}
    />
  );
};

export default ThemeSelectBox;
