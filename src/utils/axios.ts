import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const customAxios = Axios.create({
    baseURL: '/',
    timeout: 10000,
});

// customAxios.defaults.adapter = require("axios/lib/adapters/http");

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    // console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
};

const onRequestError = (error: AxiosError<any>): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
};

const onResponseError = async (error: any) => {
    return Promise.reject(error.response);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

export default setupInterceptorsTo(customAxios);
