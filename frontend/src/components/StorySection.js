import React from "react";
import "./StorySection.css";


const TopSection = () => {
    
  return (
    <section className="story-section">
      <div className="content-container">
        <div className="text-content">
        <h1>What’s the <br/>ColoredCow story? </h1>
          <h5>Imagine how will you name something that you are creating (a child, a group, a club, an organization). In situations like these don’t we all go for a name that we associate with, a quality that we would like to instill...</h5>
          <a href="https://coloredcow.com/coloredcow-name-story" target="_blank">
          <button className="read-more-button">Read more</button>
          </a>
        </div>
        <div className="image-content">
            <img src="/images/bgst.jpeg"/>
      </div>
      </div>
    </section>
  );
};

export default TopSection;
