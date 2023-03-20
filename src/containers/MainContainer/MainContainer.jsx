import React from "react";
import { ContentContainer } from "./ContentContainer";
import { InfoContainer } from "./InfoContainer";
import styles from "./MainContainer.scss";

export const MainContainer = () => {
  return (
    <div className="main-container" styles={styles}>
      <ContentContainer />
      <InfoContainer />
    </div>
  );
};
