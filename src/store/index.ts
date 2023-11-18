import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/slices/counterSlice';
import appReducer from '@/slices/appSlice';
import dbReducer from '@/slices/dbExplorerSlice';
import loginReducer from '@/slices/loginSlice';
import colorThemeReducer from '@/slices/colorThemeSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
    dbs: dbReducer,
    login: loginReducer,
    colorTheme: colorThemeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
