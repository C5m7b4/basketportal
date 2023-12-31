import React from 'react';
import useColorTheme from '../hooks/useColorTheme';

export const SmallDatabase = () => {
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
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          style={style}
          d="M258.51,376.12c-101.11,0-183.07-20.34-183.07-45.43v113c0,25.09,81.97,45.43,183.07,45.43
		s183.07-20.34,183.07-45.43v-113C441.59,355.78,359.62,376.12,258.51,376.12z"
        />
        <path
          style={style}
          d="M258.51,14.1C157.4,14.1,75.44,34.44,75.44,59.53v83.68c0,25.09,81.97,45.43,183.07,45.43
		s183.07-20.34,183.07-45.43V59.53C441.59,34.44,359.62,14.1,258.51,14.1z"
        />
        <path
          style={style}
          d="M258.51,238.65c-101.11,0-183.07-20.34-183.07-45.43v87.47c0,25.09,81.97,45.43,183.07,45.43
		s183.07-20.34,183.07-45.43v-87.47C441.59,218.31,359.62,238.65,258.51,238.65z"
        />
      </svg>
    </div>
  );
};
