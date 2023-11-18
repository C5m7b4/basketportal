import axios from 'axios';
import qs from 'qs';

const signin = async (
  url: string,
  username: string,
  password: string,
  apikey: string
) => {
  const json = await axios({
    method: 'POST',
    url: url + 'login/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      username,
      password,
      apikey,
    }),
  });

  return json;
};

export { signin };
