import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbs } from '@/api/dbApi';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { RootState } from '@/store';
import { Filter } from '../../svgs';
import {
  setDatabases,
  Database,
  DbTable,
  DbColumn,
} from '@/slices/dbExplorerSlice';
import Tree from '../Tree/Tree';
import { ITreeData } from '../Tree/types';
import { TreeNodeProps } from '../Tree/TreeNode';
import styled from 'styled-components';

const InnerPane = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 30px;
    width: 100%;
    background-color: ${theme.sidebar.color};
    color: ${theme.sidebar.text};
    border-top-left-radius: 8px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  `
);

interface FetchDatabaseResponse {
  error: number;
  success: boolean;
  dbs: Database[];
  msg?: string;
}

interface FetchTablesResponse {
  error: number;
  success: boolean;
  tables: DbTable[];
  msg?: string;
}

// interface Table {
//   database: string;
//   tables: DbTable[];
// }

const Server = () => {
  const context = useSelector((state: RootState) => state.app);
  const state = useSelector((state: RootState) => state.dbs);
  const [treeData, setTreeData] = useState<ITreeData[]>(null);
  const dispatch = useDispatch();

  let index = 0;

  useEffect(() => {
    fetchDbList();
  }, []);

  const getIndex = () => {
    index++;
    return index;
  };

  const fetchDbList = () => {
    getDbs(context.url + 'databases/dblist', context.apikey)
      .then((resp: AxiosResponse<FetchDatabaseResponse>) => {
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

  const formatTree = (data: Database[]) => {
    index = 0;
    const treeData: ITreeData[] = [
      {
        key: `s-${index}`,
        label: 'C5Laptop (Server)',
        type: 'server',
        children: renderDatabases(data || []),
      },
    ];
    setTreeData(treeData);
  };

  const renderDatabases = (data: Database[]) => {
    return data.map((database) => {
      return {
        key: `${getIndex()}-db`,
        label: database.name,
        type: 'database',
        children: renderTables(database.tables || []),
      };
    });
  };

  const renderTables = (data: DbTable[]) => {
    return data.map((table) => {
      return {
        key: `${getIndex()}-table`,
        label: table.name,
        type: 'table',
        children: renderColumns(table.columns || []),
      };
    });
  };

  const renderColumns = (data: DbColumn[]) => {
    return data.map((column) => {
      let label = '';
      const nullable =
        column.nullable.toUpperCase() == 'YES' ? 'null' : 'not null';
      switch (column.dataType) {
        case 'int':
          label = `${column.name} (int, ${nullable})`;
          break;
        case 'varchar':
          label = `${column.name} (varchar(${column.maxLength}), ${nullable})`;
          break;
        case 'money':
          label = `${column.name} (money, ${nullable})`;
          break;
        default:
          label = `${column.name} (unknown type - ${column.dataType})`;
          break;
      }
      return {
        key: `${getIndex()}-column`,
        label,
        type: 'column',
        children: [],
      };
    });
  };

  return (
    <div>
      <InnerPane>
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
      </InnerPane>
      <InnerPane style={{ height: '100vh', display: 'flex' }}>
        {treeData ? (
          <Tree treeData={treeData} />
        ) : (
          <div>Waiting for data...</div>
        )}
      </InnerPane>
    </div>
  );
};

export default Server;
