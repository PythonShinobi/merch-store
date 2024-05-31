// client/src/Hero/Hero.jsx
import React from "react";

import "./Hero.css";
import gojoImage from "../images/gojo.jpeg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-text">
        <img src={gojoImage} alt="Gojo" className="hero-image" />
        <div className="overlay">
          <h1>Discover Our Collection</h1>
          <a href="#collection" className="btn">View Collection</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
