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

export { getDbs };
