import React, { useContext } from "react";
import CountryContext, { CountryProvider } from "../../context/CountryContext";
import ContentContainer from "./ContentContainer";
import InfoContainer from "./InfoContainer";
import Route from "../../components/route/Route";
import CountriesContainer from "../countries/CountriesContainer";
import CountryDetailsContainer from "../countries/CountryDetailsContainer";
import styles from "./MainContainer.scss";

export const MainContainer = () => {
  const { currentCountry } = useContext(CountryContext);

  return (
    <div className="main-container" styles={styles}>
      <CountryProvider>
        <ContentContainer>
          <Route path="/countries">
            <CountriesContainer />
          </Route>
          <Route path={`/countries/${currentCountry}`}>
            <CountryDetailsContainer />
          </Route>
        </ContentContainer>
      </CountryProvider>
      <InfoContainer />
    </div>
  );
};
