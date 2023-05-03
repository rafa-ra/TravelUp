import React, { useContext } from "react";
import styles from "./Header.scss";

import LanguageContext from "../../context/LanguageContext";

import { icons } from "../../assets/icons/Menu";
import brazil from "../../assets/icons/brazil.png";
import spain from "../../assets/icons/spain.png";
import usa from "../../assets/icons/usa.png";

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleClick = (newLang) => changeLanguage(newLang);

  return (
    <header>
      <div className="logoDiv" styles={styles}>
        <h3 className="logo-text">Travel Up </h3>
        <img src={icons.feather} className="logo" />
      </div>
      <div className="languages">
        <img
          onClick={() => handleClick("ptBR")}
          className="flag"
          src={brazil}
        ></img>
        <img
          onClick={() => handleClick("esES")}
          className="flag"
          src={spain}
        ></img>
        <img
          onClick={() => handleClick("enUS")}
          className="flag"
          src={usa}
        ></img>
      </div>
    </header>
  );
};
