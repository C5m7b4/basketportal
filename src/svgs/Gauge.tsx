import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const Gauge = () => {
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
          d="M251,48.53C136.42,48.53,43.53,141.42,43.53,256S136.42,463.47,251,463.47S458.47,370.58,458.47,256S365.58,48.53,251,48.53
	z M256,80.29c20.79,0,37.65,16.86,37.65,37.65s-16.86,37.65-37.65,37.65s-37.65-16.86-37.65-37.65S235.21,80.29,256,80.29z M156,135
	c20.79,0,37.65,16.86,37.65,37.65c0,20.79-16.86,37.65-37.65,37.65s-37.65-16.86-37.65-37.65C118.35,151.86,135.21,135,156,135z
	 M251,423.09c-31.5,0-57.49-23.56-61.34-54.01l-92.45-71.98c-1.31-0.89-2.56-1.87-3.75-2.92l0,0l0,0
	c-7.82-6.9-12.75-16.99-12.75-28.23c0-20.79,16.86-37.65,37.65-37.65c11.36,0,21.54,5.04,28.44,12.99l85.34,61.03
	c5.95-1.9,12.29-2.94,18.87-2.94c34.16,0,61.85,27.69,61.85,61.85C312.85,395.4,285.16,423.09,251,423.09z M318.35,172.65
	c0-20.79,16.86-37.65,37.65-37.65s37.65,16.86,37.65,37.65c0,20.79-16.86,37.65-37.65,37.65S318.35,193.44,318.35,172.65z
	 M393.65,303.59c-20.79,0-37.65-16.86-37.65-37.65s16.86-37.65,37.65-37.65c20.79,0,37.65,16.86,37.65,37.65
	S414.44,303.59,393.65,303.59z"
        />
      </svg>
    </div>
  );
};
