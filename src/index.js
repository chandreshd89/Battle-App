import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Popular from "./Popular";
import Battle from "./Battle";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/popular" exact>
      <Popular />
    </Route>
    <Route path="/battle" exact>
      <Battle />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
