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
      {countries.map(({ title, currency, textContent, visas }) =>
        title === currentCountry ? (
          <div className="country-details-container" key={title}>
            <div className="container-header">
              <div>Go back</div>
              <div className="country-summary">
                <div className={`country-title ${title}`}>
                  <h3>{textContent[language].countryName}</h3>
                </div>
                <div className="quick-info">Quick Info</div>
              </div>
            </div>
            <div className="card-container">
              <DetailCard
                country={title}
                citiesObj={textContent[language].mainCities}
              />
              <DetailCard currency={currency} country={title} />
              <DetailCard visas={visas} country={title} />
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
