import React from "react";
import styles from "./CountryBanner.scss";

const CountryBanner = ({ countryInfo }) => {
  return (
    <div className="country-banner" styles={styles}>
      {countryInfo.country}
    </div>
  );
};

export default CountryBanner;
