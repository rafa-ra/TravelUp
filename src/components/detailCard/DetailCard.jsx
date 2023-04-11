import React from "react";
import styles from "./DetailCard.scss";

const DetailCard = ({ citiesObj, currency, visas }) => {
  return (
    <div className="detail-card" styles={styles}>
      {visas}
    </div>
  );
};

export default DetailCard;
