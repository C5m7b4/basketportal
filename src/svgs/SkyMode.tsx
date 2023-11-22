import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const SkyMode = () => {
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
        <path
          style={{ fill: theme.sidebar.text, stroke: '#000', strokeWidth: '8' }}
          d="M455.51,186.14c0-46.13-37.4-83.53-83.53-83.53c-13.23,0-25.73,3.09-36.84,8.56
	c-12.66-44.01-53.21-76.21-101.29-76.21c-47.25,0-87.24,31.1-100.62,73.94c-9.81-4.05-20.56-6.3-31.83-6.3
	c-46.13,0-83.53,37.4-83.53,83.53c0,4.39,0.34,8.69,0.99,12.9c-0.58,2.84-0.89,5.71-0.89,8.61c0,52.79,97.95,95.59,218.77,95.59
	s218.77-42.8,218.77-95.59c0-3-0.33-5.96-0.95-8.89C455.19,194.64,455.51,190.43,455.51,186.14z"
        />
        <path
          style={{ fill: theme.sidebar.text, stroke: '#000', strokeWidth: '8' }}
          d="M342.76,307.87c0-34.89-28.28-63.17-63.17-63.17c-10,0-19.46,2.33-27.86,6.47
	c-9.57-33.28-40.24-57.63-76.6-57.63c-35.73,0-65.98,23.52-76.09,55.92c-7.42-3.06-15.55-4.76-24.07-4.76
	c-34.89,0-63.17,28.28-63.17,63.17c0,3.32,0.26,6.57,0.75,9.75c-0.44,2.15-0.68,4.32-0.68,6.51c0,39.93,74.07,72.29,165.45,72.29
	s165.45-32.37,165.45-72.29c0-2.27-0.25-4.51-0.72-6.72C342.52,314.3,342.76,311.11,342.76,307.87z"
        />
      </svg>
    </div>
  );
};
