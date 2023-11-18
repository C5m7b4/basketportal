import { RootState } from '@/store';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbs, getTables } from '@/api/dbApi';
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
import { ITreeData } from '../components/Tree/types';
import { TreeNodeProps } from '@/components/Tree/TreeNode';

function style(color: string) {
  return {
    height: '100%',
    display: 'flex',
  };
}

interface IDbs {
  error: number;
  success: boolean;
  dbs: Database[];
  msg?: string;
}

interface ITables {
  error: number;
  success: boolean;
  tables: DbTable[];
  msg?: string;
}

interface Table {
  database: string;
  tables: DbTable[];
}

const DbExplorer = () => {
  const context = useSelector((state: RootState) => state.app);
  const state = useSelector((state: RootState) => state.dbs);
  const [sizes, setSizes] = useState([100, '30%', 'auto']);
  const [sizes1, setSizes1] = useState([100, '30%', 'auto']);
  const [treeData, setTreeData] = useState<ITreeData[]>(null);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  let index = 0;

  useEffect(() => {
    fetchDbList();
    //dispatch(setDatabases(databases));
  }, []);

  const formatTree = (data: Database[]) => {
    index = 0;
    const treeData: ITreeData[] = [
      {
        key: `s-${index}`,
        label: 'C5Laptop (Server)',
        type: 'server',
        children: renderDatabases(data),
      },
    ];

    setTreeData(treeData);
  };

  const addTableToDb = (tables: Table) => {
    const databases = state.databases;
    databases.forEach((db) => {
      if (db.name == tables.database) {
        db.tables = tables.tables;
      }
    });
    //formatTree(databases);
  };

  const fetchDbList = () => {
    getDbs(context.url + 'databases/dblist', context.apikey)
      .then((resp: AxiosResponse<IDbs>) => {
        const j = resp.data;
        if (j.error == 0) {
          dispatch(setDatabases(j.dbs));
          formatTree(j.dbs);
        } else {
          toast.warn(j.msg);
        }
      })
      .catch((err: Error) => {
        toast.error(err.message);
      });
  };

  const fetchDbTables = (database: string) => {
    getTables(context.url + 'databases/tables', database, context.apikey)
      .then((resp: AxiosResponse<ITables>) => {
        const j = resp.data;
        if (j.error == 0) {
          const tableObj: Table = {
            database,
            tables: j.tables,
          };
          addTableToDb(tableObj);
        } else {
          toast.warn(j.msg);
        }
      })
      .catch((err: Error) => {
        toast.error(err.message);
      });
  };

  const getIndex = () => {
    index++;
    return index;
  };

  const renderDatabases = (data: Database[]) => {
    return data.map((t) => {
      return {
        key: `${getIndex()}-db`,
        label: t,
        type: 'database',
        children: [],
      };
    });
  };

  const handleTreeClick = (node: TreeNodeProps) => {
    debugger;
  };

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
          <Pane minSize={50} maxSize="50%">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 30px',
                width: '100%',
                backgroundColor: 'rgb(239,239,239)',
                borderTopLeftRadius: '8px',
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingTop: '5px',
                paddingBottom: '5px',
              }}
            >
              <input
                style={{
                  padding: '3px 8px',
                  lineHeight: '1',
                  boxShadow: '0 1px 2px lsla(0, 0%, 0%, 0.2',
                  height: '30px',
                  border: 0,
                  outline: 'none',
                }}
              />
              <span style={{ marginLeft: '5px' }}>
                {' '}
                <Filter />
              </span>
            </div>
            <div style={style('#ddd')}>
              {treeData ? (
                <Tree treeData={treeData} onClick={handleTreeClick} />
              ) : (
                <div>Waiting for data...</div>
              )}
            </div>
          </Pane>
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
