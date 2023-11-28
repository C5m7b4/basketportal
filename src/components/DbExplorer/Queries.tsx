import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '../Tabs/Tabs';
import Tab from '../Tabs/Tab';
import { RootState } from '@/store';
import type { ITabCodeChanged } from '@/slices/dbExplorerSlice';
import { ITab, addTab, setSelectedTab } from '@/slices/dbExplorerSlice';
import { tabCodeChanged } from '@/slices/dbExplorerSlice';
import ReactTooltip from '../../components/Tooltips/ReactTooltip';
import QueryEditor from '../QueryEditor/QueryEditor';
import { Database as Save, Plus } from '../../svgs';
import { runQuery } from '@/api/dbApi';
import { SchemaType } from './Results';

type Props = {
  setSchema: (s: SchemaType) => void;
  setTable: (s: any) => void;
};

const Queries: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { setSchema, setTable } = props;
  const state = useSelector((state: RootState) => state.dbs);
  const context = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const onCodeChange = (e: string, i: number) => {
    console.log('change', e, i);
    const tabContents: ITabCodeChanged = {
      code: e,
      id: i,
    };
    dispatch(tabCodeChanged(tabContents));
  };

  const handleRunQuery = () => {
    const tabs = state.tabs;
    const selectedTabId = state.selectedTab;
    const selectedTab = tabs[selectedTabId];
    const query = selectedTab.query;
    runQuery(context.url + 'databases/query', context.apikey, query)
      .then((resp) => {
        const j = resp.data;
        if (j.error == '0') {
          const schema: SchemaType[] = JSON.parse(j.dt.schema);
          setSchema(schema);
          const table: any[] = JSON.parse(j.dt.table);
          setTable(table);
        }
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  };

  const handleAddTab = () => {
    const tab: ITab = {
      name: `Tab ${state.tabId + 1}`,
      query: '',
    };
    dispatch(addTab(tab));
  };

  // const handleRemoveTab = (index: number) => {
  //   dispatch(setSelectedTab(index));
  // };

  return (
    <div id="queries">
      <div className="query-toolbar">
        <span style={{ marginLeft: '5px', marginTop: '3px' }}>
          <ReactTooltip content={'Add Query'}>
            <Plus onClick={handleAddTab} />
          </ReactTooltip>
        </span>
        {/* <span style={{ marginLeft: '5px', marginTop: '3px' }}>
          <ReactTooltip content={'Remove Query'}>
            <Minus onClick={handleRemoveTab} />
          </ReactTooltip>
        </span> */}
        <span>
          <button onClick={handleRunQuery}>Run Query</button>
        </span>
        <span style={{ marginLeft: '5px' }}>
          <Save />
        </span>
      </div>
      <Tabs>
        {state.tabs.map((tab: ITab, i: number) => {
          return (
            <Tab key={`tab-${i}`} title={tab.name}>
              <QueryEditor
                onCodeChange={(code: string) => onCodeChange(code, i)}
                code={tab.query}
              />
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Queries;
