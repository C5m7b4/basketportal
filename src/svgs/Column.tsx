import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const Column = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  return (
    <div style={{ cursor: 'pointer', marginTop: '3px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
      >
        <rect
          x="112.47"
          y="17.18"
          style={{
            fill: '#fff',
            stroke: theme.sidebar.text,
            strokeWidth: '15',
          }}
          width="285.06"
          height="462.07"
        />
        <line
          style={{
            fill: 'none',
            stroke: theme.sidebar.text,
            strokeWidth: '15',
          }}
          x1="112.47"
          y1="118.33"
          x2="397.53"
          y2="118.33"
        />
        <line
          style={{
            fill: 'none',
            stroke: theme.sidebar.text,
            strokeWidth: '15',
          }}
          x1="117.07"
          y1="340.75"
          x2="397.53"
          y2="342.47"
        />
      </svg>
    </div>
  );
};
