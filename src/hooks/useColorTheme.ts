import { defaultColorThemeName } from '@/styles/themes';
import {
  getColorThemeCookie,
  setColorThemeCookie,
} from '@/utils/cookieColorTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectColorTheme, updateColorTheme } from '@/slices/colorThemeSlice';
import { themeNameStyleMap } from '@/styles/colorTheme';
import {
  ColorThemeName,
  ColorThemeStyle,
  isColorThemeName,
} from '@/styles/themes';

const useColorTheme = () => {
  const dispatch = useAppDispatch();
  const currentColorTheme = useAppSelector(selectColorTheme);

  const setColorTheme = (colorThemeName: ColorThemeName) => {
    setColorThemeCookie(colorThemeName);
    dispatch(updateColorTheme(colorThemeName));
  };

  const initColorTheme = () => {
    const currentColorThemeCookie = getColorThemeCookie();

    if (
      !currentColorThemeCookie ||
      !isColorThemeName(currentColorThemeCookie)
    ) {
      setColorTheme(defaultColorThemeName);
      return;
    }
    dispatch(updateColorTheme(currentColorThemeCookie));
  };

  const getCurrentColorThemeState = (): ColorTheme => currentColorThemeState;

  const getCurrentColorThemeStyle = (): ColorThemeStyle =>
    themeNameStyleMap[currentColorTheme];

  return {
    setColorTheme,
    initColorTheme,
    getCurrentColorThemeState,
    getCurrentColorThemeStyle,
  };
};

export default useColorTheme;
