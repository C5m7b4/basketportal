import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, History, Database } from '../svgs';
import { setAuthenticated } from '@/slices/loginSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div id="sidebar">
      <h1>Mikto Solutions</h1>
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
          <button type="submit">New</button>
        </form>
      </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 500 500"
                  xmlSpace="preserve"
                >
                  <path
                    className="st0"
                    d="M449.83,117.18H37.18V71.49c0-9.36,7.59-16.95,16.95-16.95h378.74c9.36,0,16.95,7.59,16.95,16.95V117.18z"
                  />
                  <path
                    className="st1"
                    d="M430.29,382.7H56.72c-10.79,0-19.54-8.75-19.54-19.54V125.8h412.64v237.36
C449.83,373.95,441.08,382.7,430.29,382.7z"
                  />
                  <rect
                    x="99.83"
                    y="39.02"
                    className="st1"
                    width="16.67"
                    height="27.01"
                  />
                  <rect
                    x="360.75"
                    y="41.03"
                    className="st1"
                    width="16.67"
                    height="27.01"
                  />
                </svg>
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
    </div>
  );
};

export default Sidebar;
