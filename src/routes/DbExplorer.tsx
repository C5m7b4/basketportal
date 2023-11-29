import React, { useState, useEffect, useRef } from 'react';
import SplitPane1 from '../components/SplitPane/SplitPane1';
import SplitPane from '../components/SplitPane/SplitPane';
import { Database as Db } from '../svgs';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab';
import Server from '../components/DbExplorer/Server';
import styled from 'styled-components';
import Queries from '../components/DbExplorer/Queries';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import ReactTooltip from '../components/Tooltips/ReactTooltip';
import { runQuery } from '@/api/dbApi';
import Results from '../components/DbExplorer/Results';
import { SchemaType } from '../components/DbExplorer/Results';
import DbGrid from '@/components/DbExplorer/DbGrid';

const Main = styled.div(
  ({ theme }) => `
    background-color: ${theme.body.background};
    color: ${theme.body.text};
  `
);

const DbExplorer = () => {
  const state = useSelector((state: RootState) => state.dbs);
  const context = useSelector((state: RootState) => state.app);
  const [schema, setSchema] = useState<SchemaType[]>([]);
  const [table, setTable] = useState<any[]>();
  const dispatch = useDispatch();

  const containerRefHeight = useRef<number>(0);

  useEffect(() => {
    const div = document.getElementById('detail');
    if (div) {
      const box = div.getBoundingClientRect();
      const height = box.height - 85;
      containerRefHeight.current = height;
    }
  }, []);

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
          height: `${containerRefHeight.current}px`,
          border: '2px solid black',
          borderRadius: '8px',
          display: 'flex',
        }}
      >
        <SplitPane direction="vertical" minSize={23}>
          <Server />
          {/* <div style={{ display: 'flex' }}> */}
          <SplitPane1 direction="horizontal" minSize={50}>
            <Queries setSchema={setSchema} setTable={setTable} />
            <Results schema={schema} table={table} />
          </SplitPane1>
        </SplitPane>
      </div>
    </Main>
  );
};

export default DbExplorer;
