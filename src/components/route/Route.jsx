import React, { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";

const Route = ({ children, path }) => {
  const { currentPath } = useContext(NavigationContext);

  return <>{path === currentPath ? children : null}</>;
};

export default Route;
