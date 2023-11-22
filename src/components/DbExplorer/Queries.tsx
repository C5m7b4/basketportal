import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '../Tabs/Tabs';
import Tab from '../Tabs/Tab';
import { RootState } from '@/store';
import {
  ITab,
  tabCodeChanged,
  ITabCodeChanged,
} from '@/slices/dbExplorerSlice';
import QueryEditor from '../QueryEditor/QueryEditor';

const Queries = () => {
  const state = useSelector((state: RootState) => state.dbs);
  const dispatch = useDispatch();

  const onCodeChange = (e: string, i: number) => {
    console.log('change', e, i);
    const tabContents: ITabCodeChanged = {
      code: e,
      id: i,
    };
    dispatch(tabCodeChanged(tabContents));
  };

  return (
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
  );
};

export default Queries;
