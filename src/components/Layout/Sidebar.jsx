import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { verticals } from '../../data/marketplaceCards';

const Sidebar = () => {
  const { state, actions } = useAppContext();
  const { selectedVertical, sidebarOpen } = state;

  return (
    <>
      {/* Toggle button - always visible */}
      <button 
        className={`sidebar-toggle-fixed ${!sidebarOpen ? 'sidebar-closed' : ''}`}
        onClick={actions.toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <i className={`bi ${sidebarOpen ? 'bi-chevron-double-left' : 'bi-chevron-double-right'}`}></i>
      </button>
      
      <aside className={`sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>

      {/* Header Section */}
      <div className="sidebar-header">
        <img 
          src="/Firstsource-logo.png" 
          alt="Firstsource Logo" 
          className="sidebar-logo"
        />
        <h2 className="sidebar-title">relAI Dashboard</h2>
        <p className="sidebar-subtitle">AI Marketplace Navigator</p>
      </div>

      {/* Navigation Section */}
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <h6>Business Verticals</h6>
        </div>
        
        <nav className="sidebar-nav">
          {verticals.map((vertical) => (
            <button
              key={vertical}
              className={`sidebar-btn ${selectedVertical === vertical ? 'active' : ''}`}
              onClick={() => actions.setVertical(vertical)}
            >
              {vertical}
            </button>
          ))}
        </nav>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
