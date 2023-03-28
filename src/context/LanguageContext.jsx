import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(0);

  const languageValue = {
    language,
    changeLanguage: (newLang) => {
      setLanguage(newLang);
    },
  };

  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
