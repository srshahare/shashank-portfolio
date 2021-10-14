import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="about-me">
      <h1 className="head">
        About <span>Me</span>
      </h1>
      <div>
        <h1>Who am I?</h1>
        <p>
          I am a full-stack and mobile app developer with an extensive knowledge
          of deep learning and blockchain. I recently obtained my B. Tech. In
          Computer Engineering from Dr. Babasaheb Ambedkar Technological
          University, Lonere. Apart from that I was a freelnacer for 4 years and
          completed tons of projects. I believe Idea is important but the doing
          is more important to inovate something out of that Idea.
        </p>
      </div>
      <div>
        <h1>Interests</h1>
        <ul>
          <li>
            <h3>Artificial Intelligence / Deep Learning / NLP / CV</h3>
          </li>
          <li>
            <h3>Blockchain</h3>
          </li>
          <li>
            <h3>Web / App Development</h3>
          </li>
          <li>
            <h3>Algorithms</h3>
          </li>
        </ul>
      </div>
      <div>
        <h1>Hobbies</h1>
        <ul>
          <li>
            <h3>Photography</h3>
          </li>
          <li>
            <h3>Reading</h3>
          </li>
          <li>
            <h3>Gaming</h3>
          </li>
        </ul>
      </div>
      <div>
        <h1>Fun Facts</h1>
        <ul>
          <li>
            <h3>I can type with speed of 101wpm.</h3>
          </li>
          <li>
              <h3>I am always ready to learn new things.</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutScreen;
