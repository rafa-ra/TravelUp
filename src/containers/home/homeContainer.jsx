import React from "react";

import List from "../../components/list/List";
import { components } from "../../assets/data";
import SimpleCard from "../../components/simpleCard/SimpleCard";

import { weatherReq } from "../../utils/helpers/homeContainerHelpers";

import styles from "./homeContainer.scss";

const HomeContainer = () => {
  weatherReq();

  return (
    <div className="home-container">
      <header className="home-container-header">
        <h1>Welcome to Travel Up!</h1>
        <div className="general-info">General info</div>
      </header>
      <div className="where-to">
        <div className="where-to-title">
          <h2>Where To</h2>
        </div>
        <div className="features-grid">
          <SimpleCard />
        </div>
      </div>
      <footer className="footer">
        <div className="latest-features">
          <h3>Latest</h3>
          <List elements={components.homeList.latestFeatures} />
        </div>
        <div className="next-features">
          <h3>Next</h3>
          <List elements={components.homeList.nextFeatures} />
        </div>
      </footer>
    </div>
  );
};

export default HomeContainer;
