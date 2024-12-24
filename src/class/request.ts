import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CancelTokenSource,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios';
import cookie from './cookie';

interface RequestParams {
    baseURL?: string;
    timeout?: number;
}

class HttpRequest {
    private instance: AxiosInstance;
    private cancelTokenSource: CancelTokenSource;

    constructor(params?: RequestParams) {
        this.instance = axios.create({
            baseURL: params?.baseURL ?? process.env.VUE_APP_BASE_API,
            timeout: params?.timeout || 10000,
        });
        // 取消请求凭证
        this.cancelTokenSource = axios.CancelToken.source();
        // 请求拦截器
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const token = cookie.get('token') as string
            if (token) { config.headers!.Authorization = token }
            return config;
        });
        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => { return response },
            (error) => {
                // 请求取消
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                }
                return Promise.reject(error);
            }
        )
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(url, {
            ...config,
            cancelToken: this.cancelTokenSource.token,
        });
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.post<T>(url, data, {
            ...config,
            cancelToken: this.cancelTokenSource.token,
        });
    }

    public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.put<T>(url, data, {
            ...config,
            cancelToken: this.cancelTokenSource.token,
        });
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.delete<T>(url, {
            ...config,
            cancelToken: this.cancelTokenSource.token,
        });
    }


    public cancelRequest(message?: string): void {
        this.cancelTokenSource.cancel(message);
        this.cancelTokenSource = axios.CancelToken.source(); 
    }
}

export default new HttpRequest()