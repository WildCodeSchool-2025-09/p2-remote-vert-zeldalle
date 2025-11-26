import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";
import Inventory from "./pages/Inventory";
import  InventoryProvider from "./contexts/InventoryContext";

const router = createBrowserRouter([
	{
		element: (
			<InventoryProvider>
				<App />
			</InventoryProvider>
		),
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/ingredients", element: <Ingredients /> },
			{ path: "/inventaire", element: <Inventory /> },
			{ path: "/recettes", element: <Recipes /> },
		],
	},
]);

export default router;
