import React, { useContext } from "react";
import styles from "./Header.scss";
import { Tooltip } from "react-tooltip";

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
        <Tooltip id="ptBR" style={{ fontFamily: "Poppins" }} />
        <img
          onClick={() => handleClick("ptBR")}
          className="flag"
          src={brazil}
          data-tooltip-id="ptBR"
          data-tooltip-content="Português"
          data-tooltip-place="bottom"
        ></img>
        <Tooltip id="esES" style={{ fontFamily: "Poppins" }} />
        <img
          onClick={() => handleClick("esES")}
          className="flag"
          src={spain}
          data-tooltip-id="esES"
          data-tooltip-content="Español"
          data-tooltip-place="bottom"
        ></img>
        <Tooltip id="enUS" style={{ fontFamily: "Poppins" }} />
        <img
          onClick={() => handleClick("enUS")}
          className="flag"
          src={usa}
          data-tooltip-id="enUS"
          data-tooltip-content="English"
          data-tooltip-place="bottom"
        ></img>
      </div>
    </header>
  );
};
