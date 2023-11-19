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
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const useColorTheme = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.colorTheme);
  const currentColorTheme = state.theme;

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

  const getCurrentColorThemeName = (): ColorThemeName => currentColorTheme;

  const getCurrentColorThemeStyle = (): ColorThemeStyle =>
    themeNameStyleMap[currentColorTheme];

  return {
    setColorTheme,
    initColorTheme,
    getCurrentColorThemeName,
    getCurrentColorThemeStyle,
  };
};

export default useColorTheme;
