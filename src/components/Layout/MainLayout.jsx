import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useAppContext } from '../../context/AppContext';
import Toast from '../common/Toast';

const MainLayout = ({ children }) => {
  const { state } = useAppContext();
  const { sidebarOpen } = state;
  const location = useLocation();

  // Hide sidebar on inner pages (any route other than the landing page)
  const isLandingPage = location.pathname === '/';

  return (
    <div className="app-container">
      <Header />
      {isLandingPage && <Sidebar />}
      <main className={`main-content ${isLandingPage && !sidebarOpen ? 'sidebar-collapsed' : ''} ${!isLandingPage ? 'no-sidebar' : ''}`}>
        {children}
      </main>
      <Toast />
    </div>
  );
};

export default MainLayout;
