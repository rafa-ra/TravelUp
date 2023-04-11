import React from "react";
import CountryBanner from "../../components/countryBanner/CountryBanner";
import { countries } from "../../assets/data";
import styles from "./CountriesContainer.scss";
import { CountryProvider } from "../../context/CountryContext";

const CountriesContainer = () => {
  return (
    <div className="countries-container" styles={styles}>
      <CountryProvider>
        {countries.map((e, index) => (
          <CountryBanner countryInfo={e} count={index} />
        ))}
      </CountryProvider>
    </div>
  );
};

export default CountriesContainer;
