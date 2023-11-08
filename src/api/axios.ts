import { accessConfig } from "@/config";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: accessConfig.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  timeout: 180000,
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers.Authorization = "Bearer " + token;
//   }
//   return config;
// });

const request = async <T>(func: any): Promise<AxiosResponse<T>> => {
  try {
    const response = await func();
    return response as any as AxiosResponse;
  } catch (e: any) {
    console.log(e?.response);
    throw e;
  }
};

const api = {
  get: <T>(url: string, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.get<T>(url, params)),

  post: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.post<T>(url, data, params)),

  put: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.put<T>(url, data, params)),

  patch: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.patch<T>(url, data, params)),

  delete: <T>(url: string, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.delete<T>(url, params)),
};
export default api;
