import React, { useContext, useEffect, useState } from "react";
import styles from "./InfoContainer.scss";

import NavigationContext from "../../context/NavigationContext";
import LanguageContext from "../../context/LanguageContext";
import { menuContent, components } from "../../assets/data";
import Tag from "../../components/tag/Tag";

const InfoContainer = () => {
  const { currentPath } = useContext(NavigationContext);
  const { language } = useContext(LanguageContext);
  const [basicInformation, setBasicInformation] = useState(null);
  const [nestedInformation, setNestedInformation] = useState(null);

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

  const renderedTags = (type) => {
    return (
      nestedInformation &&
      nestedInformation.tech &&
      nestedInformation.tech[type] &&
      nestedInformation.tech[type].map((e) => {
        return (
          <Tag key={e} type={type}>
            {e}
          </Tag>
        );
      })
    );
  };

  useEffect(() => {
    if (currentPath) {
      if (isCountryContainer()) {
        setBasicInformation(components.countryDetailsInfoContainer);
        setNestedInformation(components.countryDetailsInfoContainer);
        console.log("Country:");
      } else {
        const filteredInfo = menuContent.items.filter(
          (e) => e.path === currentPath
        );
        setBasicInformation(filteredInfo[0]);
        setNestedInformation(filteredInfo[0].infoContainer);
        console.log("Menu:");
      }
      console.log(nestedInformation);
    }
  }, [currentPath, language]);

  return (
    <div className="info-container" styles={styles}>
      <div className="title-div">
        <h2 className="container-title">
          {components.infoContainer.title[language]}
        </h2>
        <p className="container-description">
          {components.infoContainer.description[language]}
        </p>
        {basicInformation && (
          <h3 className="reference-container">
            {`"${basicInformation.title[language]}"`}
          </h3>
        )}
      </div>
      <div className="content">
        <div className="tech-div">
          <h3 className="content-title">
            {components.infoContainer.tech[language]}
          </h3>
          <div className="tag-container">
            {renderedTags("code")}
            {renderedTags("design")}
            {renderedTags("others")}
          </div>
        </div>
        <div className="challenges-div">
          <h3 className="content-title">
            {components.infoContainer.challenges[language]}
          </h3>
          {nestedInformation &&
            nestedInformation.challenges &&
            nestedInformation.challenges[language] && (
              <ul className="challenges-list">
                {nestedInformation.challenges[language].map((e) => (
                  <li key={e} className="challenges-item">
                    {e}
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
