import axios from "axios";
const service = axios.create({
  baseURL: "https://60becf8e6035840017c17a48.mockapi.io/api",
  headers: {
    "content-type": "application/json",
  },
});

service.interceptors.request.use(
  async (config) => {
    // Handle token here ..
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    console.log(response.data);
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default service;
