import { createSlice } from '@reduxjs/toolkit';

export interface DbColumn {
  name: string;
  position: number;
  nullable: string;
  dataType: string;
  maxLength: string;
  precision: string;
}

export interface DbTable {
  name: string;
  columns?: DbColumn[];
}

export interface Database {
  name: string;
  tables?: DbTable[];
}

interface DbState {
  databases: Database[];
}

const initialState: DbState = {
  databases: [],
};

type IAddDbList = {
  payload: Database[];
};

export const dbSlice = createSlice({
  name: 'Dbs',
  initialState,
  reducers: {
    setDatabases: (state, action: IAddDbList) => {
      state.databases = action.payload;
    },
  },
});

export const { setDatabases } = dbSlice.actions;

export default dbSlice.reducer;
