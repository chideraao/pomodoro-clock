import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SessionsAndBreaks({
	breaks,
	sessions,
	incrementBreak,
	incrementSession,
	decrementBreak,
	decrementSession,
}) {
	return (
		<div>
			<div className="breaks">
				<h2>Break Length</h2>
				<div className="icons">
					<FontAwesomeIcon onClick={incrementBreak} icon="arrow-up" size="3x" />
					<h2>{breaks}</h2>
					<FontAwesomeIcon
						onClick={decrementBreak}
						icon="arrow-down"
						size="3x"
					/>
				</div>
			</div>
			<div className="session">
				<h2>Session Length</h2>
				<div className="icons">
					<FontAwesomeIcon
						onClick={incrementSession}
						icon="arrow-up"
						size="3x"
					/>
					<h2>{sessions}</h2>
					<FontAwesomeIcon
						onClick={decrementSession}
						icon="arrow-down"
						size="3x"
					/>
				</div>
			</div>
		</div>
	);
}

export default SessionsAndBreaks;
