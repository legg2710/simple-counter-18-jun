import React, { useState } from "react";

export function Home() {
	const [count, setCount] = useState(3);
	return (
		<div className="text-center mt-5">
			<h1>{count}</h1>
			<button onClick={() => setCount(666)}>Aumentar Contador</button>
		</div>
	);
}
