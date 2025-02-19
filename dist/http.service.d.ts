import Axios, { AxiosInstance } from 'axios';
export declare class HttpService {
    private readonly instance;
    readonly put: typeof Axios.put;
    readonly post: typeof Axios.post;
    readonly patch: typeof Axios.patch;
    readonly head: typeof Axios.patch;
    readonly delete: typeof Axios.delete;
    readonly get: typeof Axios.get;
    readonly request: typeof Axios.request;
    constructor(instance?: AxiosInstance);
    get axiosRef(): AxiosInstance;
}
