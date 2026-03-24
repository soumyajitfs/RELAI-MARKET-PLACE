import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect response is processed once in index.js (handleRedirectPromise).
    const account = instance.getActiveAccount() || instance.getAllAccounts()[0];
    if (account) {
      instance.setActiveAccount(account);
      navigate('/dashboard', { replace: true });
    } else {
      setError('Authentication failed. Please try again.');
      const t = setTimeout(() => navigate('/login', { replace: true }), 2500);
      return () => clearTimeout(t);
    }
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

