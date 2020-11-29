import React, { useState, useEffect } from "react";

const Timer = ({ sessions, breaks }) => {
	let totalSecs = sessions * 60;
	let intervalHandle;

	const [timeLeft, setTimeLeft] = useState(totalSecs);
	const [onSession, setonSession] = useState(true);
	const [minutes, setMinutes] = useState("");

	let min = Math.floor(timeLeft / 60);
	let sec = timeLeft - min * 60;
	console.log(min);
	console.log(sec);

	const tick = () => {
		setMinutes(min);
		setTimeLeft(sec);
		setTimeLeft(timeLeft - 1);

		if (sec < 10) {
			setTimeLeft("0" + timeLeft);
		}
		if (min < 10) {
			setMinutes("0" + min);
		}
		if ((min === 0) & (sec === 0)) {
			clearInterval(intervalHandle);
		}
	};

	const startCount = () => {
		intervalHandle = setInterval(tick, 1000);
		/*let time = this.state.minutes;
		this.secondsRemaining = time * 60;*/
	};

	return (
		<div>
			<h2>{onSession ? "Session" : "Break"}</h2>

			{minutes === 0 && timeLeft === 0 ? null : (
				<h1>
					{" "}
					{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
				</h1>
			)}
			<button onClick={startCount}>Start</button>
		</div>
	);
};

export default Timer;
