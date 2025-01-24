import React from "react";
import "./Footer.css"; // Import your CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/coloredcow"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/ColoredCowConsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/coloredcow"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/ColoredCowHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 ColoredCow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
