import React from 'react';

type Props = {
  onClick: () => void;
};

export const Minus: React.FC<Props> = ({ onClick }) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 500 500"
        xmlSpace="preserve"
      >
        <path
          style={{
            fill: '#fff',
            stroke: '#3992ff',
            strokeWidth: '20',
            strokeMiterlimit: 'round',
          }}
          d="M463.94,500.59H47.18c-19.65,0-35.59-15.93-35.59-35.59V48.24c0-19.65,15.93-35.59,35.59-35.59h416.76
	c19.65,0,35.59,15.93,35.59,35.59V465C499.53,484.65,483.6,500.59,463.94,500.59z"
        />
        <line
          style={{
            fill: 'none',
            stroke: '#3992ff',
            strokeWidth: '20',
            strokeMiterlimit: 'round',
          }}
          x1="115.12"
          y1="256"
          x2="388.06"
          y2="256.62"
        />
      </svg>
    </div>
  );
};
