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
      params,
      baseURL: 'https://api.watchmode.com/v1/',
      timeout: 10000,
      headers,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;


// https://api.watchmode.com/v1/sources/?apiKey=YOUR_API_KEY' - пример url
// API_KEY в папке .env
// https://api.watchmode.com/docs/ - docs
