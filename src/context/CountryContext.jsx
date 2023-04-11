import { createContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [currentCountry, setCurrentCountry] = useState("");

  const changeCountry = (newCountry) => {
    setCurrentCountry(newCountry);
  };

  return (
    <CountryContext.Provider value={{ currentCountry, changeCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
