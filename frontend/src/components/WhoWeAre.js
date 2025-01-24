// WhoWeAre.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./WhoWeAre.css"; // Assuming the CSS file is created for styles
import Footer from "./Footer";
import { useState } from "react";

const WhoWeAre = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
    <div>
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
    <div className="who-we-are-container">
      {/* Introduction */}
      <section className="intro">
        <h1>Who We Are</h1>
        <p>
          ColoredCow is a problem-solving company; we solve business problems through technology. 
          We center the solutions around our clients and the people their business affects. 
          Our software products and services grow business when we make connections at the heart by making empathy the main element. 
          We believe in providing long-lasting solutions that we can share as success stories. 
          A colored cow would always stand out from the crowd; we do justice to our name by reflecting the same in our thoughts and in the way we work.
        </p>
      </section>

      {/* Vision */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Everything we do, we believe in reducing the waste in problem solving. 
          We believe in connecting with our clients through empathy. 
          We add purpose and meaning to what we do. 
          The way we reduce waste is by providing exact solutions. 
          We do not just build websites, we solve problems. 
          We solve it with the use of design and technology that is beautiful and easy to use.
        </p>
        <blockquote>
          Ideas should be treated with wisdom and delivered in delight.
        </blockquote>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>We use technology to leverage your business to achieve big wins.</li>
          <li>We focus on creating empathetic, human-centered solutions aligned with client’s vision.</li>
          <li>We work with startups to implement internet business ideas from start to delivery.</li>
          <li>Our work spans healthcare, social sector, food tech, education, and marketing.</li>
        </ul>
      </section>

      {/* Products */}
      <section className="products">
        <h2>Products</h2>
        <p>
          We believe Execution is the breath of a product. Our smart team will help you develop your idea and build it to your vision. 
          After developing successful products for our clients, we ventured into the product industry with our flagship product, ManageMyNGO in the social sector.
        </p>
        <ul>
          <li>ManageMyNGO</li>
          <li>In-house invoicing product for easy and automated invoicing</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <ul>
          <li>ManageMyNGO: Helping the NGO sector streamline operations.</li>
          <li>Redesigned a healthcare platform for a major company in the US for patient management.</li>
          <li>Developed an SMS-based support system for a client.</li>
          <li>Worked with a Kentucky-based food startup on the ‘Clean Eating Made Easy’ vision.</li>
        </ul>
      </section>

      {/* How We Do It */}
      <section className="how-we-do-it">
        <h2>How We Do It</h2>
        <p>‘Making it happen!’</p>
        <ul>
          <li>We focus on understanding requirements, setting realistic success measures, and applying the right expertise to achieve them.</li>
          <li>We have a diverse team empowered in different aspects of software engineering.</li>
          <li>Our design team works in close sync with you to shape your ideas into the right specifications.</li>
        </ul>

        <h3>Our Process</h3>
        <div className="process">
          <div className="process-item">
            <h4>Planning</h4>
            <p>Spec writing for where you want to get to and the goals to achieve. Aligning your vision with user needs.</p>
          </div>
          <div className="process-item">
            <h4>UX and Design</h4>
            <p>Good design principles from usability to aesthetic senses come into play after functional and structural work.</p>
          </div>
          <div className="process-item">
            <h4>Development</h4>
            <p>We follow agile methodology and use daily builds to track progress and ensure quality.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default WhoWeAre;
