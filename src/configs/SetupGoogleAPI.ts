import { GAPI_CLIENT_ID } from './Environment';

function setupGoogleApi() {
  return new Promise<void>((resolve, reject) => {
    const src = 'https://apis.google.com/js/api.js';

    let newScriptElement: HTMLScriptElement = document
      .querySelector(`script[src='${src}']`) as HTMLScriptElement;

    if (!newScriptElement) {
      newScriptElement = document.createElement('script');
      newScriptElement.type = 'text/javascript';
      newScriptElement.src = src;
      newScriptElement.async = true;
      newScriptElement.defer = true;
      newScriptElement.onerror = () => reject();
      newScriptElement.onabort = () => reject();
      newScriptElement.onload = () => resolve();
      document.head.appendChild(newScriptElement);
    }
  });
}

function setupGoogleAuth(config: gapi.auth2.ClientConfig):void {
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init(config);
  });
}

export default async (): Promise<void> => {
  await setupGoogleApi();
  setupGoogleAuth({
    client_id: String(GAPI_CLIENT_ID),
  });
};
