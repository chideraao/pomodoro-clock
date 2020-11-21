import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheckSquare,
	faCoffee,
	faArrowUp,
	faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./App.css";
import SessionsAndBreaks from "./components/SessionsAndBreaks";

library.add(faCheckSquare, faCoffee, faArrowUp, faArrowDown);
function App() {
	const [breaks, setBreaks] = useState(5);
	const [sessions, setSessions] = useState(25);

	const incrementSession = () => {
		if (sessions <= 59) {
			setSessions((sessions) => sessions + 1);
		}
	};

	const incrementBreak = () => {
		if (breaks <= 19) {
			setBreaks((breaks) => breaks + 1);
		}
	};

	const decrementSession = () => {
		if (sessions >= 2) {
			setSessions((sessions) => sessions - 1);
		}
	};
	const decrementBreak = () => {
		if (breaks >= 2) {
			setBreaks((breaks) => breaks - 1);
		}
	};

	return (
		<div className="container">
			<h1>Pomodoro Clock</h1>
			<SessionsAndBreaks
				breaks={breaks}
				sessions={sessions}
				incrementSession={incrementSession}
				incrementBreak={incrementBreak}
				decrementBreak={decrementBreak}
				decrementSession={decrementSession}
			/>
		</div>
	);
}

export default App;
