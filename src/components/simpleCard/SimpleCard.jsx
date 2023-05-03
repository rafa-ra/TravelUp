import React from "react";
import styles from "./SimpleCard.scss";

import Link from "../link/Link";

const SimpleCard = ({ title, color, path }) => {
  return (
    <>
      <Link path={path} key={title + color}>
        <div className={`card ${color}`} key={title + color}>
          <h2>{title}</h2>
        </div>
      </Link>
    </>
  );
};

export default SimpleCard;
