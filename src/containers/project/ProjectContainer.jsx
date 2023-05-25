import React, { useContext, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./ProjectContainer.scss";
import foto from "../../assets/images/foto-pessoal.jpeg";
import github from "../../assets/images/github-sign.png";
import linkedin from "../../assets/images/linkedin.png";
import wpp from "../../assets/images/whatsapp.png";

import LanguageContext from "../../context/LanguageContext";
import { menuContent } from "../../assets/data";

const ProjectContainer = () => {
  const { language } = useContext(LanguageContext);

  const pageInfo = menuContent.items.filter((e) => e.path === "/project")[0];

  return (
    <div className="project-container">
      <div className="about-project">
        <div className="about-text-content">
          <h2>{pageInfo.containerText.what.title[language]}</h2>
          {pageInfo.containerText.what.body[language].map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
        <div className="about-process">
          <h2>{pageInfo.containerText.process.title[language]}</h2>
          {pageInfo.containerText.process.body[language].map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="about-me">
        <div className="left-content">
          <img className="photo" src={foto} />
          <div className="about-me-info">
            <div className="text-info">
              <h4 className="my-name">Rafael Reis Araújo</h4>
              <p className="job-title">Frontend Developer</p>
              <p className="email">reis.rafael18@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="about-me-social">
          <Tooltip id="github" />
          <a
            href="https://github.com/rafa-ra"
            target="_blank"
            data-tooltip-id="github"
            data-tooltip-content="Github"
            data-tooltip-place="top"
          >
            <img className="icons" src={github} />
          </a>
          <Tooltip id="linkedin" />
          <a
            href="https://linkedin.com/in/rafaelreisaraujo"
            target="_blank"
            data-tooltip-id="linkedin"
            data-tooltip-content="Linkedin"
            data-tooltip-place="top"
          >
            <img className="icons" src={linkedin} />
          </a>
          <Tooltip id="wpp" />
          <a
            href="https://wa.me/+5531991457040"
            target="_blank"
            data-tooltip-id="wpp"
            data-tooltip-content="Whatsapp"
            data-tooltip-place="top"
          >
            <img className="icons" src={wpp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
