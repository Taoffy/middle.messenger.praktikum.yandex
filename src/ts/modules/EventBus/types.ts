/* eslint-disable */
export type TListeners = {
    [N: string]: Function[];
};

export interface IEventBus {
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
  emit<T>(event: string, ...args: T[]): void;
}
