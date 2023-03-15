import React from "react";
import styles from "./Header.scss";
import logo from "../../assets/icons/Cloud.svg";
import account from "../../assets/icons/Makers.svg";

export const Header = () => {
  return (
    <header>
      <div className="logoDiv" styles={styles}>
        <h3 className="logo-text">RAFA </h3>
        <img src={logo} className="logo" />
        <h3 className="logo-text"> REIS</h3>
      </div>
      <div className="menu">
        <img src={account}></img>
      </div>
    </header>
  );
};
