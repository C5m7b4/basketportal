import React, { useEffect, useRef } from 'react';
import { SchemaType } from './Results';
import styled from 'styled-components';

const Container = styled.div(
  ({ theme }) => `
    overflow-x: scroll;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
  `
);
const Table = styled.table(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  border: 1px solid white;
  `
);

const Tr = styled.tr(
  ({ theme }) => `
    border-bottom: 2px solid white
  `
);

const Th = styled.th(
  ({ theme }) => `

    border-right: 1px solid white;
    padding: 5px 8px 5px 8px;
    text-transform: uppercase;
  `
);

const Td = styled.td(
  ({ theme }) => `
  padding: 5px 8px 5px 8px;
  border-right: 1px solid white;
  `
);

type Props = {
  schema: SchemaType[];
  table: any[];
};

const DbGrid: React.FC<Props> = (props) => {
  const { schema, table } = props;

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (windowRef && windowRef.current) {
        const parent = windowRef.current.parentNode;
        const rect = (parent as HTMLDivElement).getBoundingClientRect();
        //windowRef.current.style.height = `${rect.height}px`;
      }
    }, 500);
  }, []);

  return (
    <Container ref={windowRef}>
      <Table>
        <thead>
          <Tr>
            {schema &&
              schema.length > 0 &&
              schema.map((s, i) => (
                <Th key={`schema-header-${i}`}>{s.DataPropertyName}</Th>
              ))}
          </Tr>
        </thead>
        <tbody>
          {table &&
            table.length > 0 &&
            table.map((t, i) => (
              <Tr key={`dt-row-${i}`}>
                {Object.keys(t).map((c, idx) => {
                  return <Td key={`td-${i}-${idx}`}>{t[c]}</Td>;
                })}
              </Tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DbGrid;
