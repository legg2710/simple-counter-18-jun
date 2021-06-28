import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export function Home() {
	return (
		<div
			id="temporizador"
			className="text-center container abs-center justify-content-center">
			<></>
		</div>
	);
}

SimpleCounter.propTypes = {
	seconds: PropTypes.string
};

export function SimpleCounter(props) {
	let digit = props.seconds;
	let ten = 0;
	let hundred = 0;
	let thousand = 0;
	let tenThousand = 0;
	let hundredThousand = 0;
	if (props.seconds > 9) {
		ten = Math.trunc(props.seconds / 10);
		digit = props.seconds % 10;
		if (ten > 9) {
			hundred = Math.trunc(ten / 10);
			ten = ten % 10;
			if (hundred > 9) {
				thousand = Math.trunc(hundred / 10);
				hundred = hundred % 10;
				if (thousand > 9) {
					tenThousand = Math.trunc(thousand / 10);
					thousand = thousand % 10;
					if (tenThousand > 9) {
						hundredThousand = Math.trunc(tenThousand / 10);
						tenThousand = tenThousand % 10;
					}
				}
			}
		}
	}
	return (
		<div className="app d-flex justify-content-center">
			<div className="digit box">
				<i className="far fa-clock"></i>
			</div>
			<div className="counter box">{hundredThousand}</div>
			<div className="counter box">{tenThousand}</div>
			<div className="counter box">{thousand}</div>
			<div className="counter box">{hundred}</div>
			<div className="counter box">{ten}</div>
			<div className="counter box">{digit}</div>
		</div>
	);
}
