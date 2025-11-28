import { Outlet } from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/NavigationBar";

function App() {

	return (
		<main>
			<Outlet />
			<NavigationBar />
		</main>
	);
}

export default App;
