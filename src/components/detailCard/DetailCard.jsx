import React, { useContext, useEffect, useState } from "react";
import styles from "./DetailCard.scss";
import axios from "axios";

import LanguageContext from "../../context/LanguageContext";
import { components } from "../../assets/data";

const DetailCard = ({ country, citiesObj, currency, visas }) => {
  // const [exchangeRate, setExchangeRate] = useState("");

  const { language } = useContext(LanguageContext);

  const renderedElements = () => {
    if (citiesObj) {
      return (
        <div className="detailCardContent">
          <div className="detailCardTitleDiv">
            <h3 className="detailCardTitle">
              {components.detailCard[language].titles.mainCities}
            </h3>
          </div>
          <ul>
            {citiesObj.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      );
    } else if (currency) {
      // const forExReq = async () => {
      //   let reqResults = await axios.get(
      //     `https://api.currencyapi.com/v3/latest?apikey=WMlVoSs89iP3NyT8cPqgnNEim1cAVQ64CfWiW798&currencies=${currency[0]}`
      //   );

      //   setExchangeRate(reqResults.data.data[currency[0]].value);
      // };

      // useEffect(() => {
      //   forExReq();
      // }, []);

      return (
        <div className="detailCardContent">
          <div className="detailCardTitleDiv">
            <h3 className="detailCardTitle">
              {components.detailCard[language].titles.currency}
            </h3>
          </div>{" "}
          {/* {<p>{`US$1.00 = ${currency[1] + exchangeRate}`}</p>} */}
        </div>
      );
    } else {
      return (
        <div className="detailCardContent">
          <div className="detailCardTitleDiv">
            <h3 className="detailCardTitle">
              {components.detailCard[language].titles.visas}
            </h3>
          </div>{" "}
          <ul>
            {visas.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className={`detailCard ${country}`} styles={styles}>
      {renderedElements()}
    </div>
  );
};

export default DetailCard;
