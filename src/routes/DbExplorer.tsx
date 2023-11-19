import React, { useState, useEffect } from 'react';
//import SplitPane from '../components/SplitPane/SplitPane';
//import Pane from '../components/SplitPane/pane';
// import SplitPane from '../components/SplitPane/SplitPane';
import SplitPane from '../components/SplitPane/SplitPane1';
import { Database as Db, Save, Plus, Minus } from '../svgs';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab';
import Server from '../components/DbExplorer/Server';
import styled from 'styled-components';

const Main = styled.div(
  ({ theme }) => `
    background-color: ${theme.body.background};
    color: ${theme.body.text};
  `
);

const DbExplorer = () => {
  // const [sizes, setSizes] = useState([100, '30%', 'auto']);
  // const [sizes1, setSizes1] = useState([100, '30%', 'auto']);

  useEffect(() => {}, []);

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
        <SplitPane direction="vertical">
          <div>Hello top</div>
          <div>Hello bottom</div>
        </SplitPane>
        {/* <SplitPane split="vertical" minSize={50}>
          <div>div1</div>
          <div>div2</div>
        </SplitPane> */}
        {/* <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          sashClassName="sash"
        >
          <Server />
          <div style={{ height: '100%', display: 'flex' }}>
            <SplitPane split="horizontal" sizes={sizes1} onChange={setSizes1}>
              <Pane>
                <div>
                  <div className="query-toolbar">
                    <span style={{ marginLeft: '5px', marginTop: '3px' }}>
                      <Plus />
                    </span>
                    <span style={{ marginLeft: '5px', marginTop: '3px' }}>
                      <Minus />
                    </span>
                    <span style={{ marginLeft: '5px' }}>
                      <Save />
                    </span>
                  </div>
                  <Tabs>
                    <Tab title="query 1">select * from price_tab</Tab>
                    <Tab title="query 2"></Tab>
                  </Tabs>
                </div>
              </Pane>
              <div>
                <Tabs>
                  <Tab title="Output"></Tab>
                  <Tab title="Messages"></Tab>
                </Tabs>
              </div>
            </SplitPane>
          </div>
        </SplitPane> */}
      </div>
    </Main>
  );
};

export default DbExplorer;
