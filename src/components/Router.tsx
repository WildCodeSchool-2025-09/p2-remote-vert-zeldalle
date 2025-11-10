import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import App from "../App";
import Accueil from "../pages/Accueil";
import Ingrédients from "../pages/Ingredients";
import Inventaire from "../pages/Inventaire";
import Recettes from "../pages/Recettes";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/articles/:id/inventaire",
				element: <Inventaire />,
			},
			{
				path: "/articles/:id/ingredients",
				element: <Ingrédients />,
			},
			{
				path: "/articles/:id/recettes",
				element: <Recettes />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(
	<RouterProvider router={router} />);
}
