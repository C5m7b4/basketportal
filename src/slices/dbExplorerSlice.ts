import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export type IAddDbList = {
  payload: Database[];
};

export type IAddTab = {
  payload: ITab;
};

export type IRemoveTab = {
  payload: number;
};

export type ITabCodeChanged = {
  code: string;
  id: number;
};

export type ITab = {
  name: string;
  query: string;
};

interface DbState {
  databases: Database[];
  tabs: ITab[] | [];
  tabId: number;
  selectedTab: number;
}

const initialState: DbState = {
  databases: [],
  tabId: 0,
  tabs: [
    {
      name: 'tab 0',
      query: 'select * from sal_reg',
    },
  ],
  selectedTab: 0,
};

export const dbSlice = createSlice({
  name: 'Dbs',
  initialState,
  reducers: {
    setDatabases: (state, action: IAddDbList) => {
      state.databases = action.payload;
    },
    addTabId: (state) => {
      state.tabId = state.tabId + 1;
    },
    addTab: (state, action: IAddTab) => {
      state.tabs = [...state.tabs, action.payload];
      state.tabId = state.tabId + 1;
      state.selectedTab = state.tabId;
    },
    removeTab: (state, action: IRemoveTab) => {
      const tabs = [...state.tabs];
      tabs.splice(action.payload, 1);
      state.tabs = tabs;
      state.tabId = state.tabId - 1;
      state.selectedTab = state.tabs.length - 1;
    },
    setSelectedTab: (state, action: PayloadAction<number>) => {
      state.selectedTab = action.payload;
    },
    tabCodeChanged: (state, action: PayloadAction<ITabCodeChanged>) => {
      const tab: ITab = state.tabs[action.payload.id];
      tab.query = action.payload.code;
      const tabs = [...state.tabs];
      tabs.splice(action.payload.id, 1, tab);
      state.tabs = tabs;
    },
  },
});

export const {
  setDatabases,
  addTabId,
  addTab,
  removeTab,
  setSelectedTab,
  tabCodeChanged,
} = dbSlice.actions;

export default dbSlice.reducer;
