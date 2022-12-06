/* eslint-disable */
export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
};

export type TOptions = {
    headers?: {
        [N: string]: string,
    };
    timeout?: number;
    method?: METHODS;
    data?: Record<string, string|number|boolean|Array<unknown>> | FormData;
};

export type THTTPMethod = (url: string, options: TOptions, timeout?: number) => Promise<XMLHttpRequest>;
