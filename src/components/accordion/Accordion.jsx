import React from "react";
import { useState } from "react";
import styles from "./Accordion.scss";

const Accordion = ({ data }) => {
  const [activeItem, setActiveItem] = useState("");

  console.log(activeItem);

  return (
    <div>
      {data.map(({ title, description }, index) => {
        return (
          <div className="dropdownItem" key={`journal ${index}`}>
            <h4
              className="dropdownTitle"
              onClick={() => {
                activeItem === index ? setActiveItem("") : setActiveItem(index);
              }}
            >
              {title}
            </h4>
            <p
              className={`dropdownText${
                index === activeItem ? " visible" : ""
              }`}
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
