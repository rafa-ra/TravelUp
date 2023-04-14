import React from "react";
import styles from "./DetailCard.scss";

const DetailCard = ({ country, citiesObj, currency, visas }) => {
  return (
    <div className={`detail-card ${country}`} styles={styles}>
      {visas}
    </div>
  );
};

export default DetailCard;
