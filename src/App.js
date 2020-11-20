import { useState } from "react";
import "./App.css";
import SessionsAndBreaks from "./components/SessionsAndBreaks";

function App() {
	const [breaks, setBreaks] = useState(5);
	const [sessions, setSessions] = useState(25);

	return (
		<div className="container">
			<h1>Pomodoro Clock</h1>
			<SessionsAndBreaks breaks={breaks} sessions={sessions} />
		</div>
	);
}

export default App;
