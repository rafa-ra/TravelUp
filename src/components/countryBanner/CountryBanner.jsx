import React, { useContext } from "react";
import styles from "./CountryBanner.scss";
import LanguageContext from "../../context/LanguageContext";

const CountryBanner = ({ countryInfo, count }) => {
  const { language } = useContext(LanguageContext);

  console.log(countryInfo.country, language);
  return (
    <>
      {count % 2 === 0 ? (
        <div className="country-banner">
          <img
            src={countryInfo.flag}
            className="country-flag even-banner-flag"
            styles={styles}
          ></img>
          <div
            className={`flip-banner ${countryInfo.classname}`}
            styles={styles}
          >
            <h4>{countryInfo.country[language]}</h4>
          </div>
          <img
            src={countryInfo.picture}
            className="country-pic"
            styles={styles}
          ></img>
        </div>
      ) : (
        <div className="country-banner" styles={styles}>
          <div
            className={`flip-banner ${countryInfo.classname}`}
            styles={styles}
          >
            <h4>{countryInfo.country[language]}</h4>
          </div>
          <img
            src={countryInfo.flag}
            className="country-flag odd-banner-flag"
            styles={styles}
          ></img>
          <img
            src={countryInfo.picture}
            className="country-pic"
            styles={styles}
          ></img>
        </div>
      )}
    </>
  );
};

export default CountryBanner;
