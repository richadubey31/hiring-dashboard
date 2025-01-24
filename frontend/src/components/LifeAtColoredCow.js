import React from "react";
import "./LifeAtColoredCow.css"; 

const LifeAtColoredCow = () => {
  return (
    <section className="life-at-coloredcow">
      <div className="video-container">
      <div className="nine">
      <h2>Glimpse of life at COloredCow<span>A sneak peek into our vibrant culture</span></h2></div>
        <video autoPlay muted loop controls className="video">
          <source src="/videos/day-in-life.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default LifeAtColoredCow;
