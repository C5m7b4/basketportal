import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, History, Database, Calendar } from '../svgs';
import { setAuthenticated } from '@/slices/loginSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NightMode, LightMode, SkyMode, RelaxMode } from '../svgs';
import { updateColorTheme } from '@/slices/colorThemeSlice';
import useColorTheme from '@/hooks/useColorTheme';
import { ColorThemeName } from '@/styles/themes';
import ReactTooltip from '../components/Tooltips/ReactTooltip';

const SidebarDiv = styled.div(
  ({ theme }) => `
    width: 22rem;
    background-color: ${theme.sidebar.color};
    color: ${theme.sidebar.text};
    border-right: solid 1px ${theme.colors.border};
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: all .4s ease;
    .gutter{
      transition: all .4s ease;
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 1rem 2rem;
      border-top: 1px solid ${theme.colors.border};
      order: 1;
      line-height: 1;
    }
    .gutter::before{
      content: url("data:image/svg+xml,%3Csvg width='25' height='18' viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.4127 6.4904C18.6984 6.26581 18.3295 6.34153 17.5802 6.25965C16.4219 6.13331 15.9604 5.68062 15.7646 4.51554C15.6551 3.86516 15.7844 2.9129 15.5048 2.32334C14.9699 1.19921 13.7183 0.695046 12.461 0.982805C11.3994 1.22611 10.516 2.28708 10.4671 3.37612C10.4112 4.61957 11.1197 5.68054 12.3363 6.04667C12.9143 6.22097 13.5284 6.3087 14.132 6.35315C15.2391 6.43386 15.3241 7.04923 15.6236 7.55574C15.8124 7.87508 15.9954 8.18975 15.9954 9.14193C15.9954 10.0941 15.8112 10.4088 15.6236 10.7281C15.3241 11.2334 14.9547 11.5645 13.8477 11.6464C13.244 11.6908 12.6288 11.7786 12.0519 11.9528C10.8353 12.3201 10.1268 13.3799 10.1828 14.6234C10.2317 15.7124 11.115 16.7734 12.1766 17.0167C13.434 17.3056 14.6855 16.8003 15.2204 15.6762C15.5013 15.0866 15.6551 14.4187 15.7646 13.7683C15.9616 12.6032 16.423 12.1505 17.5802 12.0242C18.3295 11.9423 19.1049 12.0242 19.8071 11.6253C20.5491 11.0832 21.212 10.2696 21.212 9.14192C21.212 8.01428 20.4976 6.83197 19.4127 6.4904Z' fill='%23F44250'/%3E%3Cpath d='M7.59953 11.7459C6.12615 11.7459 4.92432 10.5547 4.92432 9.09441C4.92432 7.63407 6.12615 6.44287 7.59953 6.44287C9.0729 6.44287 10.2747 7.63407 10.2747 9.09441C10.2747 10.5536 9.07172 11.7459 7.59953 11.7459Z' fill='black'/%3E%3Cpath d='M2.64217 17.0965C1.18419 17.093 -0.0034949 15.8971 7.72743e-06 14.4356C0.00352588 12.9765 1.1994 11.7888 2.66089 11.7935C4.12004 11.797 5.30772 12.9929 5.30306 14.4544C5.29953 15.9123 4.10366 17.1 2.64217 17.0965Z' fill='black'/%3E%3Cpath d='M22.3677 17.0965C20.9051 17.1046 19.7046 15.9217 19.6963 14.4649C19.6882 13.0023 20.8712 11.8017 22.3279 11.7935C23.7906 11.7854 24.9911 12.9683 24.9993 14.4251C25.0075 15.8866 23.8245 17.0883 22.3677 17.0965Z' fill='black'/%3E%3C/svg%3E%0A");
      margin-right: 0.5rem;
      position: relative;
      top: 1px;
    }
    > div{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${theme.colors.border};
    }
    > div form {
      position: relative;
    }
    > div form input[type:"search"]{
      width: 100%;
      padding-left: 2rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: 0.625rem 0.75rem;
      background-size: 1rem;
      position: relative;
    }
    > div form input["type="search"].loading{
      background-image: none;
    }
    
  `
);

const Nav = styled.nav(
  ({ theme }) => `
  nav {
    flex: 1;
    overflow: auto;
    padding-top: 1rem;
  }
  nav a span {
    float: right;
    color: #eeb004;
  }
  nav a.action span {
    color: inherit;
  }
  nav .active {
    color: inherit;
  }
  nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    color: ${theme.sidebar.text}
    transition: all .3s ease;
  }
  nav ul li {
    margin: 0.25rem 0;
    color: ${theme.sidebar.text}
    transition: all .3s ease;
  }
  nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    white-space: pre;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    gap: 1rem;
    transition: all .3s ease;
  }
  nav li:hover {
    background: ${theme.sidebar.hover};
    color: ${theme.sidebar.hoverText}
  }
  nav a.active {
    background: ${theme.sidebar.hover};
    color: white;
  }
  `
);

const Button = styled.button(
  ({ theme }) => `
    border-radius: 8px;
  `
);

const Sidebar = () => {
  const dispatch = useDispatch();
  const { setColorTheme } = useColorTheme();

  const setTheme = (theme: ColorThemeName) => {
    dispatch(updateColorTheme(theme));
    setColorTheme(theme);
  };

  return (
    <SidebarDiv>
      <div className="gutter">
        <span>Mikto Solutions</span>
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span onClick={() => setTheme('dark')}>
            <ReactTooltip content="Switch to Night Mode">
              <NightMode />
            </ReactTooltip>
          </span>
          <span onClick={() => setTheme('light')}>
            <ReactTooltip content="Swith to Light Mode">
              <LightMode />
            </ReactTooltip>
          </span>
          <span onClick={() => setTheme('sky')}>
            <ReactTooltip content="Switch to Sky Mode">
              <SkyMode />
            </ReactTooltip>
          </span>
          <span onClick={() => setTheme('mixed')}>
            <ReactTooltip content="Swith to Relax Mode">
              <RelaxMode />
            </ReactTooltip>
          </span>
        </span>
      </div>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <Button type="submit">New</Button>
        </form>
      </div>
      <Nav style={{ flex: 1 }}>
        <nav>
          <ul>
            <li>
              <div style={{ display: 'flex' }}>
                <span style={{ marginTop: '5px' }}>
                  <Gauge />
                </span>
                <span>
                  <Link to={`dashboard`}>Dashboard</Link>
                </span>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <span style={{ marginTop: '5px' }}>
                  <History />
                </span>
                <span>
                  <Link to={`history`}>History</Link>
                </span>
              </div>
            </li>
            <li
              style={{
                backgroundColor: '#4a4843',
                height: '4px',
                width: '100%',
                borderRadius: '10px',
              }}
            >
              <span>&nbsp;</span>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <span style={{ marginTop: '5px' }}>
                  <Database />
                </span>
                <span>
                  <Link to={`dbexplorer`}>DbExplorer</Link>
                </span>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex' }}>
                <span style={{ marginTop: '5px' }}>
                  <Calendar />
                </span>
                <span>
                  <Link to={`scheduling`}>Scheduling</Link>
                </span>
              </div>
            </li>
            <li
              style={{
                backgroundColor: '#4a4843',
                height: '4px',
                width: '100%',
                borderRadius: '10px',
              }}
            >
              <span>&nbsp;</span>
            </li>
            <li>
              <Link to={`modals`}>Modals</Link>
            </li>
            <li>
              <span onClick={() => dispatch(setAuthenticated(false))}>
                Logout
              </span>
            </li>
          </ul>
        </nav>
      </Nav>
    </SidebarDiv>
  );
};

export default Sidebar;
