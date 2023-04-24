import React from "react";

import {
  getUsersLocation,
  weatherGeoRequest,
} from "../../utils/helpers/homeContainerHelpers";

import styles from "./homeContainer.scss";

const HomeContainer = () => {
  const { lat, lon } = getUsersLocation();

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
        <div className="features-grid">Features</div>
      </div>
      <footer className="footer">
        <div className="latest-features">latest</div>
        <div className="next-features">next</div>
      </footer>
    </div>
  );
};

export default HomeContainer;
