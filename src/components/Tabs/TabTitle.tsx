import React from 'react';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  activeTab: number;
};

const TabTitle: React.FC<Props> = ({
  title,
  index,
  setSelectedTab,
  activeTab,
}) => {
  return (
    <li
      className="tag-title"
      style={{
        backgroundColor: activeTab == index ? '#3992ff' : 'rgb(239,239,239)',
        color: activeTab == index ? '#fff' : '#000',
      }}
      onClick={() => setSelectedTab(index)}
    >
      {title}
    </li>
  );
};

export default TabTitle;
