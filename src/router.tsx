import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/inventaire",
				element: <Inventory />,
			},
			{
				path: "/ingredients",
				element: <Ingredients />,
			},
			{
				path: "/recettes",
				element: <Recipes />,
			},
		],
	},
]);

export default router;
