import React, { useContext } from "react";
import CountryContext, { CountryProvider } from "../../context/CountryContext";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import Route from "../../components/route/Route";
import CountriesContainer from "../countries/CountriesContainer";
import CountryDetailsContainer from "../countries/CountryDetailsContainer";
import styles from "./MainContainer.scss";
import HomeContainer from "../home/homeContainer";

export const MainContainer = () => {
  const { currentCountry } = useContext(CountryContext);

  return (
    <div className="main-container" styles={styles}>
      <ContentContainer>
        <Route path="/">
          <HomeContainer />
        </Route>
        <Route path="/countries">
          <CountriesContainer />
        </Route>
        <Route path={`/countries/${currentCountry}`}>
          <CountryDetailsContainer />
        </Route>
      </ContentContainer>
      <InfoContainer />
    </div>
  );
};
