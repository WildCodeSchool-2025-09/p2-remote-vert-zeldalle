import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import InventoryProvider from "./contexts/InventoryContext";
import router from "./router";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	createRoot(rootElement).render(
		<InventoryProvider>
			<RouterProvider router={router} />
		</InventoryProvider>,
	);
}
