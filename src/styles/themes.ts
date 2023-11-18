export const colorThemeNames = ['light', 'dark', 'mixed', 'sky'] as const;

export const defaultColorThemeName: (typeof colorThemeNames)[number] = 'light';

export const colorThemeCookieName = 'myAppColorTheme';

export type ColorThemeStyle = {
  colors: {
    text: string;
    background: string;
    componentBackground: string;
    border: string;
    info: string;
    infoBg: string;
    danger: string;
    dangerBg: string;
  };
  body: {
    text: string;
    background: string;
  };
  sidebar: {
    text: string;
    color: string;
  };
  buttons: {
    primary: {
      background: string;
      text: string;
      hover: string;
    };
  };
};

export type ColorThemeName = (typeof colorThemeNames)[number];

export const isColorThemeName = (val: unknown): val is ColorThemeName =>
  colorThemeNames.includes(val as ColorThemeName);
