import React, { useState } from "react";

export function Home() {
	const [count, setCount] = useState(0);
	return (
		<div className="text-center mt-5">
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>
				Aumentar Contador
			</button>
		</div>
	);
}
