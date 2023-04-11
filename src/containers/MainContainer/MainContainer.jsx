import React from "react";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import Route from "../../components/Route";
import CountriesContainer from "../countries/CountriesContainer";
import CountryDetailsContainer from "../countries/CountryDetailsContainer";
import styles from "./MainContainer.scss";

export const MainContainer = () => {
  return (
    <div className="main-container" styles={styles}>
      <ContentContainer>
        <Route path="/countries">
          <CountriesContainer></CountriesContainer>
        </Route>
        <Route path="/developer">
          <CountryDetailsContainer></CountryDetailsContainer>
        </Route>
      </ContentContainer>
      <InfoContainer />
    </div>
  );
};
