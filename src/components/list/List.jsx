import React, { useContext } from "react";
import styles from "./List.scss";

import LanguageContext from "../../context/LanguageContext";

const List = ({ elements }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {elements.map((e) => (
        <a href="" key={e}>
          <div className="element-div" key={e}>
            <p>{e[language].title}</p>
            <p>{e[language].type}</p>
            <p>{e[language].date}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default List;
