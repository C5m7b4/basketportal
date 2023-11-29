import React, { useState, useEffect, useRef } from 'react';
import DbGrid from './DbGrid';
import styled from 'styled-components';

export type SchemaType = {
  DataPropertyName: string;
  DataPropertyType: string;
};

type Props = {
  schema: SchemaType[];
  table: any[];
  showMessages: boolean;
};

const TabDiv = styled.div(
  ({ theme }) => `
  flex: 1;
  overflow: hidden;
  `
);

const TabPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
`;

const Ul = styled.ul(
  ({ theme }) => `
    all :unset;
    text-decoration: none;
    list-style-types: none;
    display: flex;
  `
);

const Results: React.FC<Props> = (props) => {
  const { schema, table, showMessages } = props;
  const [activeTab, setActiveTab] = useState(0);
  console.log('results', schema, table);

  const activeColor = 'rgb(57,146,255)';

  const resultRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // showMessages ? setActiveTab(1) : setActiveTab(0);
    if (resultRef && resultRef.current && messageRef && messageRef.current) {
      {
        if (activeTab === 0) {
          resultRef.current.style.visibility = 'visible';
          messageRef.current.style.visibility = 'hidden';
        } else {
          resultRef.current.style.visibility = 'hidden';
          messageRef.current.style.visibility = 'visible';
        }
      }
    }

    setTimeout(() => {
      if (windowRef && windowRef.current) {
        const master = document.getElementById('pane-master-1-2');
        if (master) {
          const rect1 = (master as HTMLDivElement).getBoundingClientRect();
          const topPane = document.getElementById('pane2-top');
          const rect2 = (topPane as HTMLDivElement).getBoundingClientRect()
            .height;
          const newHeight = rect1.height - rect2 - 20;
          windowRef.current.style.height = `${newHeight}px`;
          windowRef.current.style.width = `${rect1.width}px`;
        }
      }
    }, 1000);
  }, [activeTab, showMessages]);

  const handleClick = (e: number) => {
    setActiveTab(e);
  };

  console.log('activeTab', activeTab);

  return (
    <TabDiv ref={windowRef} id="result-tab-div">
      <Ul style={{ borderBottom: '1px solid black' }}>
        <li
          onClick={() => handleClick(0)}
          style={{
            listStyleType: 'none',
            backgroundColor: activeTab === 0 ? activeColor : '#ddd',
            color: activeTab === 0 ? '#fff' : '#000',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            padding: '3px 8px',
            transition: 'all .3s ease',
            cursor: 'pointer',
          }}
        >
          Results
        </li>
        <li
          onClick={() => handleClick(1)}
          style={{
            listStyleType: 'none',
            backgroundColor: activeTab === 1 ? activeColor : '#ddd',
            color: activeTab === 1 ? '#fff' : '#000',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            padding: '3px 8px',
            transition: 'all .3s ease',
            cursor: 'pointer',
            marginLeft: '5px',
          }}
        >
          Messages
        </li>
      </Ul>
      <div style={{ height: '90%', overflow: 'hidden' }}>
        <div ref={resultRef} style={{ height: '100%' }}>
          <DbGrid table={table} schema={schema} />
        </div>
        <div ref={messageRef}>messages go here</div>
      </div>
    </TabDiv>
  );
};

export default Results;
