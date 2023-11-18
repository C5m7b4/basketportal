import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  authenticated: boolean;
}

const initialState: LoginState = {
  username: 'c5m7b4',
  password: '!@#5Scully5!@#',
  authenticated: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setAuthenticated, setUsername, setPassword } =
  loginSlice.actions;

export default loginSlice.reducer;
