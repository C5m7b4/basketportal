import { getCookie, setCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';
import { colorThemeCookieName } from '../styles/themes';
import { ColorThemeName, isColorThemeName } from '../styles/themes';

export const setColorThemeCookie = (
  value: ColorThemeName,
  options?: OptionsType
) => {
  setCookie(colorThemeCookieName, value, options);
};

export const getColorThemeCookie = (options?: OptionsType): string => {
  const colorThemeCookie = getCookie(colorThemeCookieName, options);
  return isColorThemeName(colorThemeCookie) ? colorThemeCookie : '';
};
