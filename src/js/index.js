import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//components
import { Home } from "./component/home.js";
import { library } from "@fortawesome/fontawesome-svg-core";

ReactDOM.render(<Home />, document.querySelector("#app"));
