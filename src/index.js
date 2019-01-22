import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button>CSS-in-JS</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
