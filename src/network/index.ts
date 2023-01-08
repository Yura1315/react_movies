import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({
  url,
  method = 'GET',
  data = {},
  params = {},
  headers = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params: {
        api_key: '8e0babef43795dac6a90149ecacf44d4',
        language: 'en-US',
      },
      baseURL: 'https://api.themoviedb.org/3/',
      // timeout: 10000,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;
