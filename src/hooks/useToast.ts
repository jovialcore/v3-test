import bus from '../utils/bus';

const EVENT_NAME = 'toast:toggle';

export type ToastPayload = {
  mesage?: string;
  type?: 'sucess' | 'error' | 'warn' | 'info';
  timeout?: number;
};

export type ToastData = {
  isShowed?: boolean;
} & ToastPayload;

export interface IUseToast {
  open: (payload: ToastPayload) => void;
  close: () => void;
  on: (fn: (eventData: ToastData) => void | Promise<void>) => void;
  off: (fn: (eventData: ToastData) => void | Promise<void>) => void;
}

export default function useToast(): IUseToast {
  function open(payload: ToastPayload) {
    bus.emit(EVENT_NAME, { isShowed: true, ...payload });
  }

  function close() {
    bus.emit(EVENT_NAME, { isShowed: false });
  }

  function on(fn: (eventData: ToastData) => void | Promise<void>) {
    bus.on(EVENT_NAME, fn);
  }

  function off(fn: (eventData: ToastData) => void | Promise<void>) {
    bus.off(EVENT_NAME, fn);
  }

  return {
    open, close, on, off,
  };
}
