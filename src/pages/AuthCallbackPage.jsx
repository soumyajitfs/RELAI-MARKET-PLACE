import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();

  useEffect(() => {
    // Redirect response is processed once in index.js (handleRedirectPromise).
    const account = instance.getActiveAccount() || instance.getAllAccounts()[0];
    if (account) {
      instance.setActiveAccount(account);
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [instance, navigate]);

  return null;
};

export default AuthCallbackPage;

