import React from "react";
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div>
        <h1>I'M SHASHANK SHAHARE.</h1>
        <h1>
          <span>COMPUTER ENGINEERE</span>
        </h1>
      </div>
      <p style={{ marginTop: "1rem" }}>
        I'm a Tunisian based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those around me.
      </p>
      <div className="btn">
          <p>More About Me</p>
        </div>
    </div>
  );
};

export default HomeScreen;
