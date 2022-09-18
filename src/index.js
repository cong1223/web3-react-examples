import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  rootElement
);
