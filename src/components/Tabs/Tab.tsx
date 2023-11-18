import React from 'react';

type Props = {
  title: string;
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div style={{ padding: '8px' }}>{children}</div>;
};

export default Tab;
