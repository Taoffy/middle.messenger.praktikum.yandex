/* eslint-disable */
export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type TOptions<T> = {
    headers?: {
        [N: string]: string,
    };
    timeout?: number;
    method?: METHODS;
    data?: Record<string, T>
};
