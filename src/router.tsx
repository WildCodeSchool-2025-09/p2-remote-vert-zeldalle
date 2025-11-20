import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ChoiceVersion from "./pages/ChoiceVersion"; // ← AJOUT ICI
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
				element: <ChoiceVersion />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/inventory",
				element: <Inventory />,
			},
			{
				path: "/ingredients",
				element: <Ingredients />,
			},
			{
				path: "/recipes",
				element: <Recipes />,
			},
		],
	},
]);

export default router;
