import React from "react";
import CountryDetailsCOntainer from "../countries/CountryDetailsContainer";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import styles from "./MainContainer.scss";

export const MainContainer = () => {
  return (
    <div className="main-container" styles={styles}>
      <ContentContainer>
        <CountryDetailsCOntainer />
      </ContentContainer>
      <InfoContainer />
    </div>
  );
};
