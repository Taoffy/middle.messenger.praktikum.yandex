import { IEventBus, TListeners } from './types';

export class EventBus implements IEventBus  {
  public listeners: TListeners;

  constructor() {
      this.listeners = {};
  }

  // eslint-disable-next-line no-unused-vars
  on<T>(event: string, callback: (...args: T[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  // eslint-disable-next-line no-unused-vars
  off<T>(event: string, callback: (...args: T[]) => void) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

	emit<T>(event: string, ...args: T[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}
