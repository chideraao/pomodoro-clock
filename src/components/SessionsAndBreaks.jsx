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
					<FontAwesomeIcon
						className={breaks < 2 ? "greyed-out" : ""}
						onClick={decrementBreak}
						icon="arrow-down"
						size="3x"
					/>
					<h2>{breaks}</h2>
					<FontAwesomeIcon
						className={breaks > 19 ? "greyed-out" : ""}
						onClick={incrementBreak}
						icon="arrow-up"
						size="3x"
					/>
				</div>
			</div>
			<div className="session">
				<h2>Session Length</h2>
				<div className="icons">
					<FontAwesomeIcon
						className={sessions < 2 ? "greyed-out" : ""}
						onClick={decrementSession}
						icon="arrow-down"
						size="3x"
					/>
					<h2>{sessions}</h2>
					<FontAwesomeIcon
						className={sessions > 59 ? "greyed-out" : ""}
						onClick={incrementSession}
						icon="arrow-up"
						size="3x"
					/>
				</div>
			</div>
		</div>
	);
}

export default SessionsAndBreaks;
