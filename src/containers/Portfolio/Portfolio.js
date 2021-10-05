import React from "react";
import "./Portfolio.css";

import Port from "../../assets/portfolio.png";

const Portfolio = () => {
  return (
    <div className="portfolio-screen">
      <div>
        <img className="logo" src={Port} alt="portfolio" />
        <h1>Portfolio!</h1>
      </div>
    </div>
  );
};

export default Portfolio;
