import { METHODS, THTTPMethod } from './types';

import { queryStringify } from '../../common/query-string';

export class HTTPTransport {
    private _baseUrl: string;

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    public get: THTTPMethod = (url: string, options) => {
        let finalUrl = url;
        if (options.data) {
            finalUrl = `${url}${queryStringify(options.data)}`;
        }
        
        return this.request(finalUrl, {...options, method: METHODS.GET}, options?.timeout);
    };

    public post: THTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.POST}, options?.timeout);
    };

    public put: THTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    public delete: THTTPMethod = (url: string, options) => { 
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    private request: THTTPMethod = (url: string, options = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;
        const finalUrl = `${this._baseUrl}${url}`;

        return new Promise<XMLHttpRequest>((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new window.XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method, finalUrl);

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
        
            xhr.onload = function() {
                resolve(xhr);
            };
        
            xhr.onabort = reject;
            xhr.onerror = reject;
        
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            xhr.withCredentials = true;
            
            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data instanceof FormData ? data : JSON.stringify(data));
            }
        });
    };
}
