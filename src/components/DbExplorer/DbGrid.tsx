import React from 'react';
import { SchemaType } from './Results';
import styled from 'styled-components';

const Container = styled.div(
  ({ theme }) => `
    overflow-x: scroll;
    overflow-y: scroll;
  `
);
const Table = styled.table(
  ({ theme }) => `
  width: 100%;
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
  return (
    <Container>
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
