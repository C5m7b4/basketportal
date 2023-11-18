import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  url: string;
  apikey: string;
  eKey: string;
}

const initialState: AppState = {
  url: 'https://localhost:44323/api/',
  apikey: '12584gf74589gf62',
  eKey: '8080808080808080',
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

// export const { setAuthenticated } = appSlice.actions;

export default appSlice.reducer;
