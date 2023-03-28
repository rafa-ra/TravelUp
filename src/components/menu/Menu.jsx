import React, { useState } from "react";
import styles from "./Menu.scss";
import { textContent } from "../../assets/data";
import icon from "../../assets/icons/Alerta.svg";
import menuImg from "../../assets/icons/Menu.svg";

export const Menu = () => {
  const [closedMenu, setClosedMenu] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  const closedMenuClass = closedMenu ? "closed" : "";

  const handleClick = (index) => {
    if (index !== activeItem) {
      setActiveItem(index);
    }
  };

  const menuToggle = () => setClosedMenu(!closedMenu);

  return (
    <div className={`menu-container ${closedMenuClass}`} styles={styles}>
      {!closedMenu ? (
        <>
          <div className="menu-icon-container">
            <div className="bckg-div">
              <img
                src={menuImg}
                className="menu-icon"
                onClick={menuToggle}
              ></img>
            </div>
          </div>
          {textContent.components.menu.map((item, index) => (
            <div
              onClick={() => handleClick(index)}
              className={`menu-item ${index === activeItem ? "active" : ""}`}
            >
              <div className="item-content">
                <img src={icon} className="item-icon"></img>
                <p>{item.language.usEN}</p>
              </div>
              {index === activeItem && <div className="active-item-bar"> </div>}
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="menu-icon-container">
            <div className="bckg-div">
              <img
                src={menuImg}
                className="menu-icon"
                onClick={menuToggle}
              ></img>
            </div>
          </div>
          {textContent.components.menu.map((item, index) => (
            <div
              onClick={() => handleClick(index)}
              className={`menu-item ${index === activeItem ? "active" : ""}`}
            >
              <div className="item-content">
                <img src={icon} className="item-icon"></img>
              </div>
              {index === activeItem && <div className="active-item-bar"> </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
