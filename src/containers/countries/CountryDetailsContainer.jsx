import React, { useContext } from "react";

import { GoChevronLeft } from "react-icons/go";
import { IconContext } from "react-icons";

import CountryContext from "../../context/CountryContext";
import LanguageContext from "../../context/LanguageContext";

import DetailCard from "../../components/detailCard/DetailCard";
import Link from "../../components/link/Link";
import { countries } from "../../assets/data";

import styles from "./CountryDetailsContainer.scss";
import sassVar from "../../assets/_variables.module.scss";

const CountryDetailsContainer = () => {
  const { currentCountry } = useContext(CountryContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      {countries.map(({ title, currency, textContent, visas }) => {
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
              {/*<button>Partners</button>*/}
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};
export default CountryDetailsContainer;
