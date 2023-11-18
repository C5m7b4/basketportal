import { RootState } from '@/store';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { DbTable, setDatabases } from '@/slices/dbExplorerSlice';
import { AxiosResponse } from 'axios';
import { Database } from '@/slices/dbExplorerSlice';
import SplitPane from '../components/SplitPane/SplitPane';
import Pane from '../components/SplitPane/pane';
import Tree from '../components/Tree/Tree';
import { Filter, Database as Db, Save, Plus, Minus } from '../svgs';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab';
import Server from '../components/DbExplorer/Server';

import { TreeNodeProps } from '@/components/Tree/TreeNode';

function style(color: string) {
  return {
    height: '100%',
    display: 'flex',
  };
}

const DbExplorer = () => {
  const context = useSelector((state: RootState) => state.app);
  const state = useSelector((state: RootState) => state.dbs);
  const [sizes, setSizes] = useState([100, '30%', 'auto']);
  const [sizes1, setSizes1] = useState([100, '30%', 'auto']);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      <h3 style={{ display: 'grid', gridTemplateColumns: '30px 1fr' }}>
        <span>
          <Db />
        </span>
        <span style={{ marginLeft: '10px', marginTop: '10px' }}>
          DbExplorer
        </span>
      </h3>

      <div
        style={{ height: 800, border: '2px solid black', borderRadius: '8px' }}
      >
        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          sashClassName="sash"
        >
          <Server />
          <div style={style('#ccc')}>
            <SplitPane split="horizontal" sizes={sizes1} onChange={setSizes1}>
              <Pane minSize={100} maxSize="80%">
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
        </SplitPane>
      </div>
    </div>
  );
};

export default DbExplorer;
