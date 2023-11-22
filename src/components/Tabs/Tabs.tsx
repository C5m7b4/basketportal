import React, { ReactElement } from 'react';
import TabTitle from './TabTitle';
import { useSelector, useDispatch } from 'react-redux';
import './tabs.css';
import { RootState } from '@/store';
import { setSelectedTab } from '@/slices/dbExplorerSlice';

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const state = useSelector((state: RootState) => state.dbs);
  const dispatch = useDispatch();

  const handlSelectedTab = (index: number) => {
    dispatch(setSelectedTab(index));
  };

  return (
    <div className="tabs">
      <ul style={{ borderBottom: '1px solid black' }}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={handlSelectedTab}
            activeTab={state.selectedTab}
          />
        ))}
      </ul>
      {children[state.selectedTab]}
    </div>
  );
};

export default Tabs;
