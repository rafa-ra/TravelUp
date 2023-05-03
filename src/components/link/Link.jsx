import React, { useContext } from "react";
import styles from "./Link.scss";
import NavigationContext from "../../context/NavigationContext";

const Link = ({ children, path }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
