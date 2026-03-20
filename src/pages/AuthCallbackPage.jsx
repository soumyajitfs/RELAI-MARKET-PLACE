import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    instance.handleRedirectPromise()
      .then((response) => {
        const account = response?.account || instance.getAllAccounts()[0];
        if (account) {
          instance.setActiveAccount(account);
        }
        if (response?.idToken) {
          sessionStorage.setItem('msal_id_token', response.idToken);
        }
        if (isMounted) {
          navigate('/dashboard', { replace: true });
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || 'Authentication failed. Please try again.');
      });
    return () => {
      isMounted = false;
    };
  }, [instance, navigate]);

  return (
    <div className="login-page-wrapper">
      <div className="login-content-wrapper">
        <div className="login-title-box">
          <h1 className="login-title">Signing you in...</h1>
          <p className="login-tagline">{error || 'Please wait while we complete Microsoft authentication.'}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallbackPage;

