import React, { useContext, useState } from "react";
import styles from "./Menu.scss";
import LanguageContext from "../../context/LanguageContext";
import { textContent } from "../../assets/data";
import icon from "../../assets/icons/Alerta.svg";
import menuImg from "../../assets/icons/Menu.svg";

export const Menu = () => {
  const [closedMenu, setClosedMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const { language } = useContext(LanguageContext);

  const closedMenuClass = closedMenu ? "closed" : "";

  const handleClick = (index) => {
    if (index !== activeItem) {
      setActiveItem(index);
    }
  };

  const menuToggle = () => setClosedMenu(!closedMenu);

  return (
    <div className={`menu-container ${closedMenuClass}`} styles={styles}>
      <div className="menu-icon-container">
        <div className="bckg-div">
          <img src={menuImg} className="menu-icon" onClick={menuToggle}></img>
        </div>
      </div>
      {!closedMenu ? (
        <>
          <div className="menu-content">
            <div>
              {textContent.components.menu.items.map(
                (item, index) =>
                  !item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                    >
                      <div className="item-content">
                        <img src={icon} className="item-icon"></img>
                        <p>{item.language[language]}</p>
                      </div>
                      {index === activeItem && (
                        <div className="active-item-bar"> </div>
                      )}
                    </div>
                  )
              )}
            </div>
            <div className="about">
              <h5 className="submenu-title">
                {textContent.components.menu.title.language[language]}
              </h5>
              {textContent.components.menu.items.map(
                (item, index) =>
                  item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                    >
                      <div className="item-content">
                        <img src={icon} className="item-icon"></img>
                        <p>{item.language[language]}</p>
                      </div>
                      {index === activeItem && (
                        <div className="active-item-bar"> </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="menu-content">
            <div>
              {textContent.components.menu.items.map(
                (item, index) =>
                  !item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                    >
                      <div className="item-content">
                        <img src={icon} className="item-icon"></img>
                      </div>
                      {index === activeItem && (
                        <div className="active-item-bar"> </div>
                      )}
                    </div>
                  )
              )}
            </div>
            <div className="about">
              {textContent.components.menu.items.map(
                (item, index) =>
                  item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                    >
                      <div className="item-content">
                        <img src={icon} className="item-icon"></img>
                      </div>
                      {index === activeItem && (
                        <div className="active-item-bar"> </div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
