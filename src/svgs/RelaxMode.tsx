import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const RelaxMode = () => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();

  return (
    <div style={{ cursor: 'pointer', marginTop: '3px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
      >
        <g>
          <path
            style={{ fill: theme.sidebar.text }}
            d="M94.53,388.53V145.59H28.65v320.59h42.94v-19.12c0-7.96,6.45-14.41,14.41-14.41h331.76
		c7.96,0,14.41,6.45,14.41,14.41v19.12h40v-77.65H94.53z"
          />

          <ellipse
            transform="matrix(0.3827 -0.9239 0.9239 0.3827 -241.3061 341.801)"
            className="st0"
            cx="135.12"
            cy="351.47"
            rx="29.41"
            ry="29.41"
          />
          <path
            style={{ fill: theme.sidebar.text }}
            d="M419.24,353.53c0-15.27-12.38-27.65-27.65-27.65H172.76v51.18h246.47V353.53z"
          />
        </g>
      </svg>
    </div>
  );
};
