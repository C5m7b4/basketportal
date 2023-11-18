import React from 'react';

export const Down = () => {
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
          style={{ fill: '#fff', stroke: '#000', strokeWidth: '20' }}
          d="M448.35,495.88h-385c-25.99,0-47.06-21.07-47.06-47.06v-385c0-25.99,21.07-47.06,47.06-47.06h385
          c25.99,0,47.06,21.07,47.06,47.06v385C495.41,474.81,474.34,495.88,448.35,495.88z"
        />
        <polygon points="405.57,214.19 330.2,343.16 254.83,472.13 180.82,342.37 106.82,212.61 256.19,213.4 " />
      </svg>
    </div>
  );
};
