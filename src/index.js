import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './msalInstance';

// Register Chart.js components for SHAP analysis
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </React.StrictMode>
  );
}

// MSAL must initialize once, process redirect (if returning from login.microsoftonline.com),
// then restore active account from cache so useIsAuthenticated() works on repeat visits.
msalInstance
  .initialize()
  .then(() => msalInstance.handleRedirectPromise())
  .then((response) => {
    if (response?.account) {
      msalInstance.setActiveAccount(response.account);
    } else {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0 && !msalInstance.getActiveAccount()) {
        msalInstance.setActiveAccount(accounts[0]);
      }
    }
  })
  .catch(() => {
    // Still render app so user can retry login.
  })
  .finally(() => {
    renderApp();
  });
