import { Outlet } from "react-router-dom";
import "./App.css";

import NavigateBar from "./components/NavigationBar";

function App() {
	console.info("APP MONTÉ !");

	return (
		<>
			<Outlet />
			<NavigateBar />
		</>
	);
}

export default App;
