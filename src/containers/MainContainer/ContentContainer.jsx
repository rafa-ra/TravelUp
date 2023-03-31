import React from "react";
import styles from "./MainContainer.scss";

const ContentContainer = ({ children }) => {
  return (
    <div className="content-container" styles={styles}>
      {children}
    </div>
  );
};

export default ContentContainer;
