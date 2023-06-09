import React, { createContext, useState, useEffect } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const defaultPage = () => {
      setCurrentPath("/project");
      window.history.pushState({}, "", "project");
    };

    window.location.pathname === "/"
      ? defaultPage()
      : setCurrentPath(window.location.pathname);

    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
