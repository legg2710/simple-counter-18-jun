import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//Components
import { Home } from "./component/home.js";

import { SimpleCounter } from "./component/home.js";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<SimpleCounter seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
