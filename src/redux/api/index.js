import axios from "axios";

// 969ac7a0 es mi api key personal
const baseURL = "https://www.omdbapi.com/?apikey=969ac7a0";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });
