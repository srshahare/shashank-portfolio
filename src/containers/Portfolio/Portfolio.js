import React from "react";
import "./Portfolio.css";
import Port from "../../assets/portfolio.png";
import Badge from "../../assets/badge.png";
import Intern from "../../assets/working-man.png";
import Project from "../../assets/project-management.png";
import Publ from "../../assets/newspaper.png";
import Resume from "../../assets/resume_cart.png";

import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const internships = [
  {
    key: 1,
    company: "Roxiler Systems, Pune(India)",
    position: "AWS Solution Architect, Full Stack Developer",
    duration: "Mar 2021 - Sep 2021",
    mentor: "Sachin Kumbhojkar (co-founder at Roxiler Systems)",
    description:
      "Roxiler Systems is a Software service company with a key focus on cloud mobility, enterprise application development, and deep learning models. I am working as a Software Engineer and working on a Cloud-based web application.",
    data: [],
  },
  {
    key: 2,
    company: "IIY Softwares, Mohali(India)",
    position: "Mobile App Developer, Project Lead",
    duration: "",
    mentor: "",
    description: "",
    data: [],
  },
  {
    key: 3,
    company: "DBATU",
    position: "Reasearch Intern",
    duration: "",
    mentor: "",
    description: "",
    data: [],
  },
];

const CollapsedContent = (item) => (
  <div className="collapse-content">
    <p className="collapse-title collapse-content-para">
      Position: <span>{item.position}</span>
    </p>
    <p className="collapse-title collapse-content-para">
      Duration: <span>{item.duration}</span>
    </p>
    <p className="collapse-title collapse-content-para">
      Mentor: <span>{item.mentor}</span>
    </p>
    <h2>Description:</h2>
    <p className="collapse-title collapse-content-para">
      <span>{item.description}</span>
    </p>
  </div>
);

const Portfolio = () => {
  return (
    <div data-aos="fade-left" className="portfolio-screen">
      <div>
        <img className="logo" src={Port} alt="portfolio" />
        <h1 className="header-title">Portfolio!</h1>
      </div>
      <div>
        <div>
          <div className="tag-title first">
            <img src={Badge} alt="achievements shashank" />
            <h1>Achievments</h1>
          </div>
        </div>
        <div>
          <div className="tag-title second">
            <img src={Intern} alt="achievements shashank" />
            <h1>Internships</h1>
          </div>
          <Collapse
            bordered={false}
            ghost
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            {internships.map((item, i) => (
              <Panel
                header={<p className="collapse-title">{item.company}</p>}
                key={item.key}
                className="site-collapse-custom-panel"
              >
                {CollapsedContent(item)}
              </Panel>
            ))}
          </Collapse>
        </div>
        <div>
          <div className="tag-title third">
            <img src={Publ} alt="achievements shashank" />
            <h1>Publications</h1>
          </div>
        </div>
        <div>
          <div className="tag-title fourth">
            <img src={Project} alt="achievements shashank" />
            <h1>Projects</h1>
          </div>
        </div>
        <div>
          <div className="tag-title fifth">
            <img src={Resume} alt="achievements shashank" />
            <h1>Resume</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
