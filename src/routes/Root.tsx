import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Login from './Login';
import Sidebar from '../components/Sidebar';
import { RootState } from '@/store';
import useColorTheme from '@/hooks/useColorTheme';

export default function Root() {
  const loginState = useSelector((state: RootState) => state.login);
  const { getCurrentColorThemeStyle } = useColorTheme();

  return (
    <ThemeProvider theme={getCurrentColorThemeStyle()}>
      <div style={{ display: 'flex', height: '100%', width: '1000%' }}>
        {!loginState.authenticated ? (
          <Login />
        ) : (
          <div style={{ display: 'flex', height: '100%', width: '1000%' }}>
            <Sidebar />
            <div id="detail">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
