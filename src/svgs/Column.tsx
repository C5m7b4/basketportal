import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const Column = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const style = {
    fill: 'none',
    stroke: theme.sidebar.text,
    strokeWidth: '16',
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
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          style={style}
          d="M456.88,131.47H33.35V69.41c0-18.68,15.14-33.82,33.82-33.82h355.88c18.68,0,33.82,15.14,33.82,33.82V131.47z"
        />
        <path
          style={style}
          d="M402.97,446.18H87.62c-25.33,0-45.86-20.53-45.86-45.86V122.06h407.06v278.26
	C448.82,425.65,428.29,446.18,402.97,446.18z"
        />
        <rect
          style={style}
          x="219.82"
          y="127.94"
          width="41.18"
          height="313.53"
        />
      </svg>
    </div>
  );
};
