import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//components
import { Home } from "./component/home.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { SecondsCounter } from "./component/home.js";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.getElementById("#app")
	);
	counter += 1;
}, 1000);
