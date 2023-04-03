import React, { useState } from "react";
import styles from "./CountryBanner.scss";

const CountryBanner = ({ countryInfo, count }) => {
  const [visibleFlipDiv, setVisibleFlipDiv] = useState(false);

  const hiddenClass = visibleFlipDiv ? "visible" : "";

  return (
    <>
      {count % 2 === 0 ? (
        <div
          className="country-banner"
          onMouseEnter={() => {
            setVisibleFlipDiv(!visibleFlipDiv);
            console.log(visibleFlipDiv);
            return;
          }}
          onMouseLeave={() => {
            setVisibleFlipDiv(!visibleFlipDiv);
            return console.log(visibleFlipDiv);
          }}
          styles={styles}
        >
          <img
            src={countryInfo.flag}
            className="country-flag even-banner-flag"
            styles={styles}
          ></img>
          <div className={`flip-banner ${hiddenClass}`} styles={styles}>
            <h4>HELLO</h4>
          </div>
          <img
            src={countryInfo.picture}
            className="country-pic"
            styles={styles}
          ></img>
          <div className="country-name" styles={styles}>
            {countryInfo.country}
          </div>
        </div>
      ) : (
        <div
          className="country-banner"
          onMouseEnter={() => {
            setVisibleFlipDiv(!visibleFlipDiv);
            return console.log(visibleFlipDiv);
          }}
          onMouseLeave={() => {
            setVisibleFlipDiv(!visibleFlipDiv);
            return console.log(visibleFlipDiv);
          }}
          styles={styles}
        >
          <div className={`flip-banner ${hiddenClass}`} styles={styles}>
            <h4>HELLO</h4>
          </div>
          <img
            src={countryInfo.flag}
            className="country-flag odd-banner-flag"
            styles={styles}
          ></img>
          <div className="country-name" styles={styles}>
            {countryInfo.country}
          </div>
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
