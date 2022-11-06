import { METHODS, THTTPMethod } from './types';

function queryStringify<T>(data: Record<string, T>) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

export class HTTPTransport<T extends object> {
    get: THTTPMethod<T> = (url: string, options = {}) => {
        let finalUrl = url;
        if (options.data) {
            finalUrl = `${url}${queryStringify(options.data)}`;
        }
        
        return this.request(finalUrl, {...options, method: METHODS.GET}, options.timeout);
    };

    post: THTTPMethod<T> = (url: string, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put: THTTPMethod<T> = (url: string, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete: THTTPMethod<T> = (url: string, options = {}) => { 
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request: THTTPMethod<T> = (url: string, options = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method, url);

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
            
            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
