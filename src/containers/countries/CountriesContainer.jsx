import React from "react";
import Link from "../../components/link/Link";
import CountryBanner from "../../components/countryBanner/CountryBanner";
import { countries } from "../../assets/data";
import styles from "./CountriesContainer.scss";

const CountriesContainer = () => {
  return (
    <div className="countries-container" styles={styles}>
      {countries.map((e, index) => (
        <Link path={`/countries/${e.title}`} key={e.title}>
          <CountryBanner countryInfo={e} count={index} key={e.title} />
        </Link>
      ))}
    </div>
  );
};

export default CountriesContainer;
