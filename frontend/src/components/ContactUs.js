import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ContactUs.css";
import Footer from "./Footer";

const ContactUs = () => {
    const location = useLocation();

  const [mapsLoaded, setMapsLoaded] = useState({
    tehri: false,
    dwarahat: false,
    hastinapur: false
  });

  const handleMapLoad = (location) => {
    setMapsLoaded(prev => ({
      ...prev,
      [location]: true
    }));
  };
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <div className="page-container">
    <header className="header">
        <div className="logo">
          <img src="https://coloredcow.com/wp-content/themes/ColoredCow/dist/img/logo.png" alt="ColoredCow Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/" className={isActive("/")}>Work with Us</Link>
          <Link to="/whoWeAre" className={isActive("/whoWeAre")}>Who We are</Link>
          <Link to="/ContactUs" className={isActive("/ContactUs")}>Contact Us</Link>
        </nav>
      </header>
    <main className="contact-us">
      <div className="nine">
      <h2>Contact Us<span>Lets Connect and create something beautiful</span></h2></div>

      <div className="contact-content">
        <div className="contact-email">
          <h2>Email Us</h2>
          <p>
            Have a question or want to collaborate? <br/> Reach out to us at{" "}
            <a href="mailto:info@coloredcow.com">info@coloredcow.com</a>
          </p>
        </div>
        <h2>Our Locations</h2>
        <div className="contact-locations">
          
          {/* Rest of your locations code remains the same, just add onLoad handler to iframes */}
          {/* Example for one location: */}
          <div className="location">
            <h3>Tehri</h3>
            <p>Tehri Hills, Uttarakhand</p>
            <div className="map">
              <iframe
                title="Tehri"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224303.10051047753!2d78.75857265449247!3d30.35713792335749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390376ee30f6eaf9%3A0x7d92e6350708d20!2sTehri%20Dam!5e0!3m2!1sen!2sin!4v1671455364610!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                onLoad={() => handleMapLoad('tehri')}
              ></iframe>
            </div>
          </div>
          <div className="location">
            <h3>Dwarahat</h3>
            <p>Dwarahat, Almora, Uttarakhand</p>
            <div className="map">
              <iframe
                title="Dwarahat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.7193791165144!2d79.66375331515479!3d29.70701660204231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3903463e49bde6cd%3A0x9fc68f7bb91dff9e!2sDwarahat%2C%20Uttarakhand%20253424!5e0!3m2!1sen!2sin!4v1671455410678!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                onLoad={() => handleMapLoad('Dwarahat')}
              ></iframe>
            </div>
          </div>
          <div className="location">
            <h3>Hastinapur</h3>
            <p>Hastinapur, Meerut, Uttar Pradesh</p>
            <div className="map">
              <iframe
                title="Hastinapur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138865.75716424694!2d77.79292237953014!3d29.155045507202917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3903e39b4ee0fbff%3A0x9f94e53be7c0391!2sHastinapur%2C%20Meerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1671455511823!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                onLoad={() => handleMapLoad('Hastinapur')}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
};

export default ContactUs;