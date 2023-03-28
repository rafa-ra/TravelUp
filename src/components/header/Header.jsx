import React, { useContext, useState } from "react";
import styles from "./Header.scss";
import LanguageContext from "../../context/LanguageContext";
import logo from "../../assets/icons/Cloud.svg";
import account from "../../assets/icons/Makers.svg";

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const [inputText, setInputText] = useState("");

  return (
    <header>
      <div className="logoDiv" styles={styles}>
        <h3 className="logo-text">RAFA </h3>
        <img src={logo} className="logo" />
        <h3 className="logo-text"> REIS</h3>
      </div>
      <div className="menu">
        <button onClick={() => changeLanguage(language + 1)}>
          Change Language
        </button>
        <h3>{language}</h3>
      </div>
    </header>
  );
};
