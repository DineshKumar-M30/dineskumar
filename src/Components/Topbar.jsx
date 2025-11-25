
import React from "react";
import "./Topbar.css";

function Topbar({ onMenuToggle }) { 
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-toggle-btn" onClick={onMenuToggle}>☰</button>
        <button className="back-btn">←</button>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input placeholder="Search" />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">⚙️</button>
        <div className="profile-chip">
          <div className="avatar">A</div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;