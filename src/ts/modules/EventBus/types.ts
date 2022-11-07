/* eslint-disable */
export type TListeners = {
    [N: string]: Function[];
};

export interface IEventBus {
  on<T>(event: string, callback: (...args: T[]) => void): void;
  off<T>(event: string, callback: (...args: T[]) => void): void;
  emit<T>(event: string, ...args: T[]): void;
}
