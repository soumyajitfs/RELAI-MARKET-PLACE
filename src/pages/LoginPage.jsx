import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../authConfig';

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();
  const hasTriggeredLoginRef = useRef(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
      return;
    }

    if (
      !hasTriggeredLoginRef.current &&
      inProgress === InteractionStatus.None
    ) {
      hasTriggeredLoginRef.current = true;
      instance.loginRedirect(loginRequest);
    }
  }, [isAuthenticated, inProgress, instance, navigate]);

  return null;
};

export default LoginPage;

