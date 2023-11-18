import axios from 'axios';

const getDbs = async (url: string, apikey: string) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: url,
    params: {
      apikey,
    },
  });
  return json;
};

const getTables = async (url: string, database: string, apikey: string) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: url,
    params: {
      database,
      apikey,
    },
  });
  return json;
};

const getColumns = async (
  url: string,
  database: string,
  table: string,
  apikey: string
) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: url,
    params: {
      database,
      table,
      apikey,
    },
  });
  return json;
};

export { getDbs, getTables, getColumns };
