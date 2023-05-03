import React, { useContext, useState } from "react";
import styles from "./Menu.scss";
import Link from "../link/Link";
import LanguageContext from "../../context/LanguageContext";
import NavigationContext from "../../context/NavigationContext";
import { menuContent } from "../../assets/data";
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
              {menuContent.items.map(
                (item, index) =>
                  !item.aboutItem && (
                    <Link path={item.path} key={item.path}>
                      <div
                        onClick={() => handleClick(index)}
                        className={`menu-item ${
                          index === activeItem ? "active" : ""
                        }`}
                        key={item.path}
                      >
                        <div className="item-content">
                          <img src={item.icon} className="item-icon"></img>
                          <p>{item.language[language]}</p>
                        </div>
                        {index === activeItem && (
                          <div className="active-item-bar"> </div>
                        )}
                      </div>
                    </Link>
                  )
              )}
            </div>
            <div className="about">
              <h5 className="submenu-title">
                {/*menuContent.title.language[language]*/}
              </h5>
              {menuContent.items.map(
                (item, index) =>
                  item.aboutItem && (
                    <Link path={item.path} key={item.path}>
                      <div
                        onClick={() => handleClick(index)}
                        className={`menu-item ${
                          index === activeItem ? "active" : ""
                        }`}
                        key={item.path}
                      >
                        <div className="item-content">
                          <img src={item.icon} className="item-icon"></img>
                          <p>{item.language[language]}</p>
                        </div>
                        {index === activeItem && (
                          <div className="active-item-bar"> </div>
                        )}
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="menu-content">
            <div>
              {menuContent.items.map(
                (item, index) =>
                  !item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                      key={item.path}
                    >
                      <div className="item-content">
                        <img src={item.icon} className="item-icon"></img>
                      </div>
                      {index === activeItem && (
                        <div className="active-item-bar"> </div>
                      )}
                    </div>
                  )
              )}
            </div>
            <div className="about">
              {menuContent.items.map(
                (item, index) =>
                  item.aboutItem && (
                    <div
                      onClick={() => handleClick(index)}
                      className={`menu-item ${
                        index === activeItem ? "active" : ""
                      }`}
                      key={item.path}
                    >
                      <div className="item-content">
                        <img src={item.icon} className="item-icon"></img>
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
