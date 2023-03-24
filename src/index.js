import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// to fix  warning about adding a non-passive event listener to a touchstart event
document.addEventListener("touchstart", function () {}, { passive: true });
// still didn't work!!!!!!
