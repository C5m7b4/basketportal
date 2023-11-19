import { ColorThemeStyle, ColorThemeName } from './themes';

import {
  dryadBark,
  dryadBarkHover,
  white,
  errigalWhite,
  gainsboro,
  coralRed,
  vegetation,
  astrograniteDebris,
  aswadBlack,
  washedBlack,
  softPetals,
  translucentUnicorn,
  dark_surface_100,
  dark_surface_200,
  dark_surface_300,
  dark_surface_400,
  dark_surface_500,
  dark_surface_600,
  dark_primary_100,
  dark_primary_200,
  dark_primary_300,
  dark_primary_400,
  dark_primary_500,
  dark_primary_600,
  dark_mixed_100,
  dark_mixed_200,
  dark_mixed_300,
  dark_mixed_400,
  dark_mixed_500,
  dark_mixed_600,
  sky_mixed_100,
  sky_mixed_200,
  sky_mixed_300,
  sky_mixed_400,
  sky_mixed_500,
  sky_mixed_600,
  light_primary_100,
  light_primary_200,
  light_primary_300,
  light_primary_400,
  light_primary_500,
  light_primary_600,
} from './colors';

export const defaultColorThemeName: ColorThemeName = 'light';

export const lightTheme: ColorThemeStyle = {
  colors: {
    text: dryadBark,
    background: errigalWhite,
    componentBackground: white,
    border: dryadBarkHover,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
  },
  body: {
    background: errigalWhite,
    text: dryadBark,
  },
  sidebar: {
    color: light_primary_400,
    text: dryadBark,
  },
  buttons: {
    primary: {
      background: dryadBark,
      text: errigalWhite,
      hover: dryadBarkHover,
    },
  },
};

export const darkTheme: ColorThemeStyle = {
  colors: {
    text: white,
    background: aswadBlack,
    componentBackground: washedBlack,
    border: astrograniteDebris,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
  },
  body: {
    background: dark_surface_100,
    text: dark_surface_600,
  },
  sidebar: {
    color: dark_surface_100,
    text: dark_surface_500,
  },
  buttons: {
    primary: {
      background: errigalWhite,
      text: dryadBark,
      hover: dryadBarkHover,
    },
  },
};

export const mixedTheme: ColorThemeStyle = {
  colors: {
    text: dark_mixed_600,
    background: dark_mixed_100,
    componentBackground: dark_mixed_200,
    border: dark_mixed_500,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
  },
  body: {
    background: dark_mixed_100,
    text: dark_mixed_600,
  },
  sidebar: {
    color: dark_mixed_100,
    text: dark_mixed_500,
  },
  buttons: {
    primary: {
      background: dark_mixed_300,
      text: dark_mixed_600,
      hover: astrograniteDebris,
    },
  },
};

export const skyTheme: ColorThemeStyle = {
  colors: {
    text: sky_mixed_600,
    background: sky_mixed_100,
    componentBackground: sky_mixed_200,
    border: sky_mixed_500,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
  },
  body: {
    background: sky_mixed_100,
    text: sky_mixed_600,
  },
  sidebar: {
    color: sky_mixed_100,
    text: sky_mixed_500,
  },
  buttons: {
    primary: {
      background: sky_mixed_300,
      text: sky_mixed_600,
      hover: astrograniteDebris,
    },
  },
};

export const themeNameStyleMap: { [key in ColorThemeName]: ColorThemeStyle } = {
  light: lightTheme,
  dark: darkTheme,
  mixed: mixedTheme,
  sky: skyTheme,
};

export const defaultColorThemeStyle = themeNameStyleMap[defaultColorThemeName];
