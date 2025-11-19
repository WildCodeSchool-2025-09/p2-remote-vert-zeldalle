import { Outlet, useLocation } from "react-router-dom";
import "./App.css";

import NavigateBar from "./components/NavigationBar";

function App() {
	const location = useLocation();

	// Cacher la navigation uniquement sur la home
	const hideNav = location.pathname === "/";

	return (
		<>
			{!hideNav && <NavigateBar />}
			<Outlet /> {/* ici les pages s'affichent */}
		</>
	);
}

export default App;
