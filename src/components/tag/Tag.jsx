import React from "react";
import styles from "./Tag.scss";

const Tag = ({ children, type }) => {
  let tagColor = "";
  if (type === "code") {
    tagColor = "purple";
  } else if (type === "design") {
    tagColor = "pink";
  } else {
    tagColor = "gray";
  }

  return <div className={`tag ${tagColor}`}>{children}</div>;
};

export default Tag;
