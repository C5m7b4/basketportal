import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const Table = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const style = {
    fill: theme.sidebar.text,
  };
  return (
    <div style={{ cursor: 'pointer', marginTop: '3px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          style={style}
          d="M452.47,68.53h-390c-18.03,0-32.65,14.62-32.65,32.65v296.47c0,18.03,14.62,32.65,32.65,32.65h390
	c18.03,0,32.65-14.62,32.65-32.65V101.18C485.12,83.15,470.5,68.53,452.47,68.53z M242.47,386.76H81.29v-83.53h161.18V386.76z
	 M242.47,265H81.29v-83.53h161.18V265z M433.65,386.76H272.47v-83.53h161.18V386.76z M433.65,265H272.47v-83.53h161.18V265z"
        />
      </svg>
    </div>
  );
};
