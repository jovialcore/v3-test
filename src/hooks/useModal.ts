import bus from '../utils/bus';

const EVENT_NAME = 'modal:toggle';

export type ModalPayload = {
  component: string;
};

export type ModalData = {
  show: boolean;
} & ModalPayload;

export interface IUseModal {
  open: (payload: ModalPayload) => void;
  close: (payload: ModalPayload) => void;
  on: (fn: (eventData: ModalData) => void | Promise<void>) => void;
  off: (fn: (eventData: ModalData) => void | Promise<void>) => void;
}

export default function useModal(): IUseModal {
  function open(payload: ModalPayload) {
    bus.emit(EVENT_NAME, { show: true, ...payload });
  }

  function close(payload: ModalPayload) {
    bus.emit(EVENT_NAME, { show: false, ...payload });
  }

  function on(fn: (eventData: ModalData) => void | Promise<void>) {
    bus.on(EVENT_NAME, fn);
  }

  function off(fn: (eventData: ModalData) => void | Promise<void>) {
    bus.off(EVENT_NAME, fn);
  }

  return {
    open, close, on, off,
  };
}
