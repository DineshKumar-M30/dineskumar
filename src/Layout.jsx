import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css'; 


function Layout({ children }) { 
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {children} 
      </main>
    </div>
  );
}

export default Layout;