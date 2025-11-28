import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Ingredients from "./pages/Ingredients";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "app",
		element: (
				<App />
		),
		children: [
			{
				path: "inventory",
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
