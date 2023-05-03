import React, { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import List from "../../components/list/List";
import { components } from "../../assets/data";
import SimpleCard from "../../components/simpleCard/SimpleCard";
import { icons } from "../../assets/icons/Menu";

import { weatherReq } from "../../utils/helpers/homeContainerHelpers";

import styles from "./homeContainer.scss";

const HomeContainer = () => {
  const { language } = useContext(LanguageContext);

  weatherReq();

  return (
    <div className="home-container">
      <header className="home-container-header">
        <h1>{components.homeText[language].headerTitle}</h1>
        <div className="general-info">
          <div>
            <img src={icons.feather} />
          </div>
        </div>
      </header>
      <div className="where-to">
        <div className="where-to-title">
          <h2>{components.homeText[language].whereTo}</h2>
        </div>
        <div className="features-grid">
          {components.homeCards.map((e) => (
            <SimpleCard
              title={e.language[language].title}
              color={e.color}
              path={e.path}
              key={e.language[language].title}
            />
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="latest-features">
          <h3>{components.homeText[language].latestFeatures}</h3>
          <List elements={components.homeList.latestFeatures} />
        </div>
        <div className="next-features">
          <h3>{components.homeText[language].nextFeatures}</h3>
          <List elements={components.homeList.nextFeatures} />
        </div>
      </footer>
    </div>
  );
};

export default HomeContainer;
