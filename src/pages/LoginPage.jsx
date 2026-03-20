import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page-logo">
        <img
          src="/Firstsource-logo.png"
          alt="firstsource logo"
          className="firstsource-logo-img"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <div className="login-content-wrapper">
        <div className="login-title-box">
          <h1 className="login-title">relAI Marketplace</h1>
          <p className="login-subtitle">ENTERPRISE AI SOLUTIONS PLATFORM</p>
          <div className="login-auth-divider" />
          <p className="login-description">Sign in with your organizational account to access the AI marketplace.</p>
          <div className="auth-form">
            <button type="button" className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

