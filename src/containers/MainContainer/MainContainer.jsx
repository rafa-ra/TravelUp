import React from "react";
import CountriesContainer from "../countries/CountriesContainer";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import styles from "./MainContainer.scss";

export const MainContainer = () => {
  return (
    <div className="main-container" styles={styles}>
      <ContentContainer>
        <CountriesContainer />
      </ContentContainer>
      <InfoContainer />
    </div>
  );
};
