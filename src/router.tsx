import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import InventoryProvider from "./contexts/InventoryContext";
import Ingredients from "./pages/Ingredients";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
	{
		element: (
			<InventoryProvider>
				<App />
			</InventoryProvider>
		),
		children: [
			{
				path: "inventaire",
				element: <Inventory />,
			},
			{
				path: "ingredients",
				element: <Ingredients />,
			},
			{
				path: "recettes",
				element: <Recipes />,
			},
		],
	},
]);

export default router;
