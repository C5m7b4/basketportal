import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeTab } from '@/slices/dbExplorerSlice';

const TabPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
`;

const TabButton = styled.span`
  background-color: #27243187;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

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
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTab(index));
  };

  return (
    <li
      className="tag-title"
      style={{
        backgroundColor: activeTab == index ? '#3992ff' : 'rgb(239,239,239)',
        color: activeTab == index ? '#fff' : '#000',
      }}
      onClick={() => setSelectedTab(index)}
    >
      <TabPanel>
        <span>{title}</span>
        <TabButton onClick={handleClick}>X</TabButton>
      </TabPanel>
    </li>
  );
};

export default TabTitle;
