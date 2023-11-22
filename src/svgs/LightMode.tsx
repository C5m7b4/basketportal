import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const LightMode = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const style = {
    fill: 'none',
    stroke: theme.sidebar.text,
    strokeWidth: '16',
  };

  return (
    <div style={{ cursor: 'pointer', marginTop: '3px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
      >
        <g>
          <circle
            style={{
              fill: 'none',
              stroke: theme.sidebar.text,
              strokeWidth: '80',
              strokeDasharray: '20,30',
            }}
            cx="256"
            cy="256.62"
            r="183.53"
          />
        </g>
        <circle
          style={{ fill: theme.sidebar.text }}
          cx="256"
          cy="256.62"
          r="126.23"
        />
      </svg>
    </div>
  );
};
