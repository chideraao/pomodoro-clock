import React from "react";

function SessionsAndBreaks({ breaks, sessions }) {
	return (
		<div>
			<div className="breaks">
				<h2>Break Length</h2>
				<h2>{breaks}</h2>
			</div>
			<div className="session">
				<h2>Session Length</h2>
				<h2>{sessions}</h2>
			</div>
		</div>
	);
}

export default SessionsAndBreaks;
