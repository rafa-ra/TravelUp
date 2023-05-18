import React, { useContext, useEffect, useState } from "react";
import styles from "./InfoContainer.scss";

import NavigationContext from "../../context/NavigationContext";
import LanguageContext from "../../context/LanguageContext";
import { menuContent, components } from "../../assets/data";

const InfoContainer = () => {
  const { currentPath } = useContext(NavigationContext);
  const { language } = useContext(LanguageContext);
  const [information, setInformation] = useState(null);

  const isCountryContainer = () => {
    if (
      currentPath != "/" &&
      currentPath != "/project" &&
      currentPath != "/countries"
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (currentPath && language) {
      if (isCountryContainer()) {
        setInformation(components.countryDetailsInfoContainer);
      } else {
        const filteredInfo = menuContent.items.filter(
          (e) => e.path === currentPath
        );
        setInformation(filteredInfo[0]);
      }
    }
  }, [currentPath, language]);

  return (
    <div className="info-container" styles={styles}>
      <div className="title-div">
        <h2 className="container-title">Info Container:</h2>
        {information && (
          <h3 className="reference-container">{information.title[language]}</h3>
        )}
      </div>
      <div className="content">
        <div className="tech-div">
          <h3 className="content-title">Technologies</h3>
          <div>Hi</div>
        </div>
        <div className="challenges-div">
          <h3 className="content-title">Challenges</h3>
          <p className="challenges-description"></p>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
