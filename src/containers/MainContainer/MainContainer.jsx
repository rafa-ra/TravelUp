import React from "react";
import { CountryProvider } from "../../context/CountryContext";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import Route from "../../components/Route";
import CountriesContainer from "../countries/CountriesContainer";
import CountryDetailsContainer from "../countries/CountryDetailsContainer";
import styles from "./MainContainer.scss";
import { LanguageProvider } from "../../context/LanguageContext";

export const MainContainer = () => {
  return (
    <div className="main-container" styles={styles}>
      <CountryProvider>
        <ContentContainer>
          <Route path="/countries">
            <CountriesContainer></CountriesContainer>
          </Route>
          <Route path="/developer">
            <CountryDetailsContainer />
          </Route>
        </ContentContainer>
      </CountryProvider>
      <InfoContainer />
    </div>
  );
};
