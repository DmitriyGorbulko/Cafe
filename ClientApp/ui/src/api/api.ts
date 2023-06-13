import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { v4 as uuidv4 } from "uuid";


export const ApiBase: AxiosInstance = axios.create();

export interface ApiResponse<T> {
	data: T;
	error?: AxiosError;
}

export const initAxios = (errorHandler: (error: AxiosError) => void) => {
    
	ApiBase.defaults.baseURL = "http://localhost:5000/api/v1";
    // ApiBase.defaults.baseURL = "http://localhost:5000";
    ApiBase.defaults.responseType = "json";

	ApiBase.interceptors.response.use(
		(response: AxiosResponse) => response,
		(error: AxiosError) => {
			errorHandler && errorHandler(error);
			return Promise.reject(error);
		}
	);

	ApiBase.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			if (config.headers) config.headers["X-Request-ID"] = uuidv4();
			return config;
		},
		(error) => Promise.reject(error)
	);
};

const commonHeaders: Record<string, string> = ApiBase.defaults.headers?.common as any;

export const clearAuthHeaders = () => {
	delete commonHeaders["Authorization"];
};

export const setAuthHeaders = (token: string) => {
	clearAuthHeaders();
	if (token) {
		commonHeaders["Authorization"] = `Bearer ${token}`;
	}
};

export default class Api {
	static get<T = any>(url: string, config?: AxiosRequestConfig<T>) {
		return ApiBase.get<T>(url, config);
	}

	static post<R = any, T = any>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
		return ApiBase.post<T, AxiosResponse<R>>(url, data, config);
	}

	static put<R = any, T = any>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
		return ApiBase.put<T, AxiosResponse<R>>(url, data, config);
	}
}