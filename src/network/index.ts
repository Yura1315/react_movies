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
      headers: {
        'X-RapidAPI-Key': 'e81fdf3df6msh3bd39336c3af4d6p189958jsn03b0306eee36',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
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


//https://rapidapi.com/SAdrian/api/moviesdatabase/
// const axios = require("axios");
// const options = {
//   method: 'GET',
//   url: 'https://moviesdatabase.p.rapidapi.com/titles',
//   headers: {
//     'X-RapidAPI-Key': 'e81fdf3df6msh3bd39336c3af4d6p189958jsn03b0306eee36',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
