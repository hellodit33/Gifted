import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Vi importerar bootstrap efter scss filen för att få vår css fil vara i första prio.
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
