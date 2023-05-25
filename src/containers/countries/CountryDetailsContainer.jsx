import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import { IconContext } from "react-icons";
import { GoChevronLeft } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";

import CountryContext from "../../context/CountryContext";
import LanguageContext from "../../context/LanguageContext";

import DetailCard from "../../components/detailCard/DetailCard";
import Link from "../../components/link/Link";
import { countries } from "../../assets/data";
import { weatherReq } from "../../utils/helpers/CountryDetailsHelpers";

import styles from "./CountryDetailsContainer.scss";
import sassVar from "../../assets/_variables.module.scss";

const CountryDetailsContainer = () => {
  const { currentCountry } = useContext(CountryContext);
  const { language } = useContext(LanguageContext);
  const [weather, setWeather] = useState("");

  useEffect(() => {
    weatherReq(currentCountry, language, setWeather);
  }, [language]);

  const countryCost = (cost) => {
    if (cost.cost === "low-cost") {
      return <BsCurrencyDollar />;
    } else if (cost.cost === "regular") {
      return (
        <div className="cost-div">
          <BsCurrencyDollar />
          <BsCurrencyDollar />
        </div>
      );
    } else {
      return (
        <div className="expensive">
          <BsCurrencyDollar />
          <BsCurrencyDollar />
          <BsCurrencyDollar />
        </div>
      );
    }
  };

  return (
    <>
      {countries.map(
        ({ title, currency, cost, countryLanguages, textContent, visas }) => {
          return title === currentCountry ? (
            <div className="country-details-container" key={title}>
              <div className="container-header">
                <IconContext.Provider
                  value={{ size: "2em", color: `${sassVar[currentCountry]}` }}
                >
                  <div className="goBackIconDiv">
                    <Link path="/countries">
                      <GoChevronLeft />
                    </Link>
                  </div>
                </IconContext.Provider>
                <div className="country-summary">
                  <div className={`country-title ${title}`}>
                    <h3>{textContent[language].countryName}</h3>
                  </div>
                  <div className="quick-info">
                    <div className="weather-div">
                      <Tooltip id="weather" style={{ fontFamily: "Poppins" }} />
                      <img
                        className="weather-icon"
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        data-tooltip-id="weather"
                        data-tooltip-content={weather.description}
                        data-tooltip-place="bottom"
                      />
                    </div>
                    <Tooltip id="cost" style={{ fontFamily: "Poppins" }} />
                    <div
                      className="cost"
                      data-tooltip-id="cost"
                      data-tooltip-content={cost.tooltipText[language]}
                      data-tooltip-place="bottom"
                    >
                      <IconContext.Provider
                        value={{ size: "30px", color: "#4CBB17" }}
                      >
                        {countryCost(cost)}
                      </IconContext.Provider>
                    </div>
                    <Tooltip id="languages" style={{ fontFamily: "Poppins" }} />
                    <div
                      className="languages-div"
                      data-tooltip-id="languages"
                      data-tooltip-content={
                        countryLanguages.tooltipText[language]
                      }
                      data-tooltip-place="bottom"
                    >
                      {countryLanguages.icons.map((e) => (
                        <img className="language-icons" src={e} key={e} />
                      ))}
                    </div>
                  </div>
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
              <div className="container-footer"></div>
            </div>
          ) : null;
        }
      )}
    </>
  );
};
export default CountryDetailsContainer;
