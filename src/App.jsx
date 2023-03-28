import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import { MainContainer } from "./containers/MainContainer/MainContainer";
// import Accordion from "./components/accordion/Accordion";
// import { accordionOptions } from "../src/assets/data";
import BaseLayout from "./containers/BaseLayout";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BaseLayout>
          <Header />
          <main>
            <Menu />
            <MainContainer />
          </main>
        </BaseLayout>
      </div>
    </LanguageProvider>
  );
}

export default App;
