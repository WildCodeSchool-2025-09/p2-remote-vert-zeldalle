import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom"; // ← CORRECTION ICI
import router from "./router";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
