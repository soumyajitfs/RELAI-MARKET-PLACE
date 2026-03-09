import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/Layout/MainLayout';
import LandingPage from './pages/LandingPage';
import PatientCollectabilityPage from './pages/PatientCollectabilityPage';
import UtilityPropensityPage from './pages/UtilityPropensityPage';
import RpcPage from './pages/RpcPage';
import AmlAlertPage from './pages/AmlAlertPage';
import CustomerChurnPage from './pages/CustomerChurnPage';
import CollectabilityPage from './pages/CollectabilityPage';
import UnderDevelopmentPage from './pages/UnderDevelopmentPage';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/global.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/patient-collectability" element={<PatientCollectabilityPage />} />
            <Route path="/utility-propensity" element={<UtilityPropensityPage />} />
            <Route path="/rpc-contact" element={<RpcPage />} />
            <Route path="/aml-alert" element={<AmlAlertPage />} />
            <Route path="/customer-churn" element={<CustomerChurnPage />} />
            <Route path="/collectability-model" element={<CollectabilityPage />} />
            <Route path="/under-development/:cardTitle?" element={<UnderDevelopmentPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </AppProvider>
  );
}

export default App;
