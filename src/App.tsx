import { Outlet } from "react-router-dom";
import Filters from "./components/Filters";
import NavigationBar from "./components/NavigationBar";
import { FiltersProvider } from "./contexts/FiltersContext";

export default function App() {
	return (
		<FiltersProvider>
			<Filters />
			<Outlet />
			<NavigationBar />
		</FiltersProvider>
	);
}
