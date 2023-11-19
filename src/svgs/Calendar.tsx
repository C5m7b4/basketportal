import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const Calendar = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const style = {
    fill: theme.sidebar.text,
  };

  return (
    <div
      style={{
        cursor: 'pointer',
        marginTop: '3px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 512 512"
      >
        <path
          style={style}
          d="M26.29,450.73c0,16.98,14.01,30.74,31.3,30.74h396.82c17.28,0,31.3-13.76,31.3-30.74V152.54H26.29V450.73z"
        />
        <path
          style={style}
          d="M444.41,55.99h-24.58V28.53h-37.65v27.46H125.71V28.53H88.06v27.46H67.59c-22.81,0-41.3,18.49-41.3,41.3v22.55h459.41
		V97.29C485.71,74.48,467.22,55.99,444.41,55.99z"
        />
      </svg>
    </div>
  );
};
