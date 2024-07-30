import axios, { AxiosHeaders } from 'axios';
import { environment } from '../../../environments/environment';

const axiosInstance = axios.create({
  baseURL: environment.apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${environment.apiToken}`;
    return config;
  },
  (error) => Promise.reject(error),
  { synchronous: true },
);

export default axiosInstance;
