import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/Test";

const jsx = (
  <div>
    <p>I'm App.js</p>
    <Test text={"Hello there, I'm some props text!"} />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
