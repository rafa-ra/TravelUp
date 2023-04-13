import React, { useContext } from "react";
import CountryContext from "../../context/CountryContext";
import LanguageContext from "../../context/LanguageContext";
import DetailCard from "../../components/detailCard/DetailCard";
import { countries } from "../../assets/data";
import styles from "./CountryDetailsContainer.scss";

const CountryDetailsContainer = () => {
  const { currentCountry } = useContext(CountryContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      {countries.map(({ classname, currency, textContent, visas }) =>
        classname === currentCountry ? (
          <div className="country-details-container" key={classname}>
            <div className="container-header" styles={styles}>
              <div>Go back</div>
              <div className="country-summary" styles={styles}>
                <div className="country-title">
                  <h3>{textContent[language].countryName}</h3>
                </div>
                <div className="quick-info" styles={styles}>
                  Quick Info
                </div>
              </div>
            </div>
            <div className="card-container" styles={styles}>
              <DetailCard citiesObj={textContent[language].mainCities} />
              <DetailCard currency={currency} />
              <DetailCard visas={visas} />
            </div>
            <div className="container-footer">
              <button>Partners</button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};
export default CountryDetailsContainer;
