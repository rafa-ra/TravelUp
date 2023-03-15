import React from "react";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
// import Accordion from "./components/accordion/Accordion";
// import { accordionOptions } from "../src/assets/data";
import BaseLayout from "./containers/BaseLayout";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Header />
        <Menu></Menu>
      </BaseLayout>
    </div>
  );
}

export default App;
