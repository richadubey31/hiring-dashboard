
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FaBell, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
  <div className="sidebar-header-content">
    <div className="sidebar-text">
      <h3>ColoredCow</h3>
      <p>Admin User</p>
    </div>
    <img src="	https://coloredcow.com/wp-content/themes/ColoredCow/dist/img/logo-white.png
" alt="Logo" className="sidebar-logo" />
  </div>
</div>

        <nav className="sidebar-nav">
          <ul>
            <li className="active">
            <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link to="/admin/application-tracking">Application Tracking</Link>
            </li>
            <li>
            <Link to="/admin/hr-reports">HR Reports</Link>
            </li>
          </ul>
        </nav>
        <div className="collapse-btn-container">
  <button onClick={handleSidebarToggle} className="collapse-button">
    {isSidebarCollapsed ? ">" : "<"}
  </button>
</div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="main-header">
          <h1>Dashboard</h1>
          <div className="header-icons">
            <FaBell className="icon" />
            <FaSignOutAlt className="icon" />
          </div>
        </header>

        {/* Overview */}
        <div className="overview">
          <div className="card">
            <h3>Total Job Postings</h3>
            <p>10</p>
          </div>
          <div className="card">
            <h3>Applications Last 30 Days</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Pending Applications</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Approved Applications</h3>
            <p>100</p>
          </div>
          <div className="card">
            <h3>Rejected Applications</h3>
            <p>25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
