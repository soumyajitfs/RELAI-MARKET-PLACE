import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
    const account = event.payload?.account;
    if (account) {
      msalInstance.setActiveAccount(account);
    }

    if (event.payload?.idToken) {
      sessionStorage.setItem('msal_id_token', event.payload.idToken);
    }
  }
});

