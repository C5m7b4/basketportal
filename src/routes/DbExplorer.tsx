import React, { useEffect } from 'react';
import SplitPane from '../components/SplitPane/SplitPane1';
import { Database as Db, Save, Plus, Minus } from '../svgs';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab';
import Server from '../components/DbExplorer/Server';
import styled from 'styled-components';
import Queries from '../components/DbExplorer/Queries';
import { useDispatch, useSelector } from 'react-redux';
import { ITab, addTab, setSelectedTab } from '@/slices/dbExplorerSlice';
import { RootState } from '@/store';
import ReactTooltip from '../components/Tooltips/ReactTooltip';

const Main = styled.div(
  ({ theme }) => `
    background-color: ${theme.body.background};
    color: ${theme.body.text};
  `
);

const DbExplorer = () => {
  const state = useSelector((state: RootState) => state.dbs);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleAddTab = () => {
    const tab: ITab = {
      name: `Tab ${state.tabId + 1}`,
      query: '',
    };
    dispatch(addTab(tab));
  };

  const handleRemoveTab = (index: number) => {
    dispatch(setSelectedTab(index));
  };

  return (
    <Main>
      <h3 style={{ display: 'grid', gridTemplateColumns: '50px 1fr' }}>
        <span>
          <Db />
        </span>
        <span style={{ marginLeft: '10px', marginTop: '10px' }}>
          DbExplorer
        </span>
      </h3>

      <div
        style={{
          height: 800,
          border: '2px solid black',
          borderRadius: '8px',
          display: 'flex',
        }}
      >
        <SplitPane direction="vertical" minSize={23}>
          <Server />
          <div style={{ height: '100%', display: 'flex' }}>
            <SplitPane direction="horizontal" minSize={45}>
              <div>
                <div className="query-toolbar">
                  <span style={{ marginLeft: '5px', marginTop: '3px' }}>
                    <ReactTooltip content={'Add Query'}>
                      <Plus onClick={handleAddTab} />
                    </ReactTooltip>
                  </span>
                  <span style={{ marginLeft: '5px', marginTop: '3px' }}>
                    <ReactTooltip content={'Remove Query'}>
                      <Minus onClick={handleRemoveTab} />
                    </ReactTooltip>
                  </span>
                  <span style={{ marginLeft: '5px' }}>
                    <Save />
                  </span>
                </div>
                <Queries />
              </div>

              <div>
                <Tabs>
                  <Tab title="Output"></Tab>
                  <Tab title="Messages"></Tab>
                </Tabs>
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>
    </Main>
  );
};

export default DbExplorer;
