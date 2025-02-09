import React from "react";
import "./hero.css";
import profile from "../../assets/profile.png";
import resume from "../../assets/profile.png"; // Ensure this is a PDF file

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="Profile" className="hero-profile" />
      <h1>Hello World !!!</h1>
      <h2>
        <span>I'm Mehak Khan</span>
      </h2>
      <p>Welcome to my portfolio. I’m passionate about coding and technology!</p>
      
      <div className="hero-action">
        <a href={resume} download="Mehak_Khan_Resume.pdf" className="hero-resume">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
