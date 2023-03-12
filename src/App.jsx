import React from "react";
import Accordion from "./components/accordion/Accordion";
import { accordionOptions } from "./assets/data";

function App() {
  return (
    <div className="App">
      <Accordion data={accordionOptions} />
    </div>
  );
}

export default App;
