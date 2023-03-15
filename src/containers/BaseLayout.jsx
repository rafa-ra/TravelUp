import React from "react";
import styles from "./BaseLayout.scss";

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout" styles={styles}>
      {children}
    </div>
  );
};

export default BaseLayout;
