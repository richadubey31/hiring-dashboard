import React from "react";
import {useNavigate, useLocation } from "react-router-dom";
import "./TopSection.css";
import SearchBar from "./SearchBar";


const TopSection = () => {
    const location = useLocation(); // Get current route
    const navigate = useNavigate(); // Navigation hook

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? "active" : "";
  return (
    <div className="top-section">
      {/* Background photo */}
      <div className="background-photo">
        {/* Header */}
        <header className="header">
        <div className="logo">
            <img src="https://coloredcow.com/wp-content/themes/ColoredCow/dist/img/logo.png" alt="ColoredCow Logo" />
          </div>         
           <nav className="nav-links">
           <a href="/" className={isActive("/")}>Work with Us</a>
           <a href="/WhoWeAre" className={isActive("/WhoWeAre")}>Who We are</a>
            <a href="/ContactUs" className={isActive("/ContactUs")}>Contact Us</a>
            {/* Vertical Separator */}
            <span className="separator">|</span>
            <a href="/admin" className={`admin-link ${isActive("/admin")}`}>
              For Admin
            </a>
          </nav>
        </header>

        {/* Centered content */}
        <div className="centered-content">
          <h1>Explore for opportunities here</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-wrapper">
        <SearchBar
          onSearch={(params) => {
            // Construct query string and navigate
            const query = new URLSearchParams(params).toString();
            navigate(`/jobs?${query}`);
          }}
        />
      </div>
    </div>
  );
};

export default TopSection;
