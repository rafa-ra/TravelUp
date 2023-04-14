import React, { useContext } from "react";
import styles from "./CountryBanner.scss";
import CountryContext from "../../context/CountryContext";
import LanguageContext from "../../context/LanguageContext";

const CountryBanner = ({ countryInfo, count }) => {
  const { language } = useContext(LanguageContext);
  const { changeCountry } = useContext(CountryContext);

  return (
    <>
      {count % 2 === 0 ? (
        <div
          className="country-banner"
          onClick={() => changeCountry(countryInfo.title)}
        >
          <img
            src={countryInfo.flag}
            className="country-flag even-banner-flag"
            styles={styles}
          ></img>
          <div className={`flip-banner ${countryInfo.title}`}>
            <h4>{countryInfo.country[language]}</h4>
          </div>
          <img
            src={countryInfo.picture}
            className="country-pic"
            styles={styles}
          ></img>
        </div>
      ) : (
        <div
          className="country-banner"
          onClick={() => changeCountry(countryInfo.title)}
        >
          <div className={`flip-banner ${countryInfo.title}`}>
            <h4>{countryInfo.country[language]}</h4>
          </div>
          <img
            src={countryInfo.flag}
            className="country-flag odd-banner-flag"
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
