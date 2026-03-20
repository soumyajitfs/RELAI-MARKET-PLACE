import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';

const RequireAuth = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;

