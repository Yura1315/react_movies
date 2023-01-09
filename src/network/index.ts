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
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US',
      },
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: 10000,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;
