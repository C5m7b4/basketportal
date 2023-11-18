import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setUsername, setPassword } from '@/slices/loginSlice';
import { encrypt } from '../utils';
import { signin } from '../api/loginApi';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { setAuthenticated } from '@/slices/loginSlice';
import { ThemePreferenceContext } from './Root';

interface Response {
  error: number;
  success: boolean;
  msg?: string;
}

const LoginDiv = styled.div(
  ({ theme }) =>
    `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`
);

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Login = () => {
  const loginState = useSelector((state: RootState) => state.login);
  const appState = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);

  const submit = (e: any) => {
    e.preventDefault();
    const eUsername = encrypt(loginState.username, appState.eKey).toString();
    const ePassword = encrypt(loginState.password, appState.eKey).toString();
    signin(appState.url, eUsername, ePassword, appState.apikey)
      .then((resp: AxiosResponse<Response>) => {
        const j = resp.data;
        if (j.error == 0) {
          dispatch(setAuthenticated(true));
        } else {
          toast.warn(j.msg);
        }
      })
      .catch((err: Error) => {
        toast.error(err.message);
      });
  };

  return (
    <LoginDiv>
      <Form>
        <h3>Login</h3>
        <input
          className="form-control mt-3 mb-3"
          onChange={(v) => dispatch(setUsername(v.target.value))}
          value={loginState.username}
        />
        <input
          className="form-control mb-3"
          onChange={(v) => dispatch(setPassword(v.target.value))}
          value={loginState.password}
          type="password"
        />
        <button type="submit" onClick={submit} className="btn">
          Login
        </button>
      </Form>
      <div>{currentTheme}</div>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </LoginDiv>
  );
};

export default Login;
