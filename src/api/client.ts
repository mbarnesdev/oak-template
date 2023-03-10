import { default as axios } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

type ClientGetOptions = {
  url: string;
  config?: AxiosRequestConfig;
};

type ClientPostOptions<K> = {
  body: K;
} & ClientGetOptions;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const client = (axiosInstance: AxiosInstance) => ({
  get: <T>({ url = '', config = {} }: ClientGetOptions) =>
    axiosInstance.get<T>(url, config),
  post: <T, K>({ url = '', body, config = {} }: ClientPostOptions<K>) =>
    axiosInstance.post<T, K>(url, body, config),
});

export default client(axiosInstance);
