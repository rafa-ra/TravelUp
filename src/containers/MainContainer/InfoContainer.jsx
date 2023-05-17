import React, { useContext, useEffect, useState } from "react";
import styles from "./InfoContainer.scss";

import NavigationContext from "../../context/NavigationContext";
import LanguageContext from "../../context/LanguageContext";
import { menuContent } from "../../assets/data";

const InfoContainer = () => {
  const { currentPath } = useContext(NavigationContext);
  const { language } = useContext(LanguageContext);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    if (currentPath) {
      const filteredInfo = menuContent.items.filter(
        (e) => e.path === currentPath
      );
      setInformation(filteredInfo[0].language[language]);
    }
  }, [currentPath, language]);

  return (
    <div className="info-container" styles={styles}>
      <div className="title-div">
        <h2 className="container-title">Info Container:</h2>
        <h3 className="reference-container">{information}</h3>
      </div>
      <div className="content">
        <div className="tech-div">
          <h3 className="content-title">Technologies</h3>
          <div>Hi</div>
        </div>
        <div className="challenges-div">
          <h3 className="content-title">Challenges</h3>
          <textarea className="challenges-description">
            Example Description
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
