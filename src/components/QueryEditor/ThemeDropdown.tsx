import React from 'react';
import { themes, ITheme } from './monaco-themes';

type Props = {
  handleThemeChange: (s: ITheme) => void;
};

interface ThemeType {
  name: string;
  value: string;
}

const themeTypes: ThemeType[] = [
  {
    name: 'VS',
    value: 'vs',
  },
  {
    name: 'VS Dark',
    value: 'vs-dark',
  },
  {
    name: 'High Contract',
    value: 'hc-black',
  },
  {
    name: 'Vibrant Ink',
    value: 'vibrantInk',
  },
];

const ThemeDropDown: React.FC<Props> = ({ handleThemeChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = themes.filter((t) => t.name === e.target.value)[0];
    if (theme) {
      console.log('theme', theme);
      handleThemeChange(theme);
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="0">Select a theme</option>
      {themeTypes.map((t, i) => (
        <option key={`theme-${i}`} value={t.value}>
          {t.name}
        </option>
      ))}
    </select>
  );
};

export default ThemeDropDown;
