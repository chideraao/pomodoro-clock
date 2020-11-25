import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ sessions, breaks }) => {
	const [minutes, setMinutes] = useState(sessions);
	const [seconds, setSeconds] = useState(0);
	const [onSession, setOnSession] = useState(true);

	const startCount = () => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
					setOnSession(false);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	};

	const click_ref = React.useRef(null);

	React.useEffect(() => {
		startCount();
		console.log("Updating click_ref...");
		click_ref.current = startCount;
	}, []);

	return (
		<div>
			<h2>{onSession ? "Session" : "Break"}</h2>

			{minutes === 0 && seconds === 0 ? null : (
				<h1>
					{" "}
					{minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</h1>
			)}
			<button onClick={startCount}>Start</button>
		</div>
	);
};

export default Timer;
