import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function DOMContentLoaded () {
  ReactDOM.render(<App />, document.getElementById("root"));
}

document.addEventListener("DOMContentLoaded", DOMContentLoaded);
