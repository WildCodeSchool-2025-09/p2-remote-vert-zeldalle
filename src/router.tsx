import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Ingredients from "./pages/Ingredients";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";
import ChoiceVersion from "./pages/ChoiceVersion";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ 	path: "/", 
				element: <ChoiceVersion /> 
			},
			{ 	path: "/Home",
				 element: <Home />
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
				path: "/recettes",
				element: <Recipes />,
			},
		],
	},
]);

export default router;
