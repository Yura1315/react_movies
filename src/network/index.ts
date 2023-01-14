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
      baseURL: 'https://moviesdatabase.p.rapidapi.com/',
      timeout: 10000,
      headers: {
        'X-RapidAPI-Key': 'e81fdf3df6msh3bd39336c3af4d6p189958jsn03b0306eee36',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (e) {
    return undefined;
  }
};

export default makeRequest;
