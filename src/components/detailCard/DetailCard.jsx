import React from "react";
import styles from "./DetailCard.scss";

const DetailCard = ({ country, citiesObj, currency, visas }) => {
  const renderedElements = () => {
    if (citiesObj) {
      return (
        <ul>
          {citiesObj.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      );
    } else if (currency) {
      return <p>{currency}</p>;
    } else {
      return (
        <ul>
          {visas.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className={`detail-card ${country}`} styles={styles}>
      {renderedElements()}
    </div>
  );
};

export default DetailCard;
