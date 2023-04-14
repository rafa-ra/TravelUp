import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { NavigationProvider } from "./context/NavigationContext";
import { CountryProvider } from "./context/CountryContext";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import { MainContainer } from "./containers/MainContainer/MainContainer";
import BaseLayout from "./containers/BaseLayout";

function App() {
  return (
    <NavigationProvider>
      <LanguageProvider>
        <CountryProvider>
          <div className="App">
            <BaseLayout>
              <Header />
              <main>
                <Menu />
                <MainContainer />
              </main>
            </BaseLayout>
          </div>
        </CountryProvider>
      </LanguageProvider>
    </NavigationProvider>
  );
}

export default App;
