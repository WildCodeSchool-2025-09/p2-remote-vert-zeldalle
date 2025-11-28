import { Link, useLocation } from "react-router-dom";
import ingredientsIcon from "../components/assets/IconIngredient.png";
import inventoryIcon from "../components/assets/IconInventaire.png";
import recipesIcon from "../components/assets/IconRecette.png";
import "./NavigationBar.css";

function NavigateBar() {
	const location = useLocation();

	const recipesActive = location.pathname === "/app/recettes";
	const inventoryActive = location.pathname === "/app/inventory";
	const ingredientActive = location.pathname === "/app/ingredients";

	return (
		<div className="nav-container">
			<Link
				to="/app/recettes"
				className={`nav-card ${recipesActive ? "active" : ""}`}
			>
				<img src={recipesIcon} alt="logo recettes" />
				<span>Recettes</span>
			</Link>

			<Link
				to="/app/inventory"
				className={`nav-card ${inventoryActive ? "active" : ""}`}
			>
				<img src={inventoryIcon} alt="logo inventory" />
				<span>Inventaire</span>
			</Link>

			<Link
				to="/app/ingredients"
				className={`nav-card ${ingredientActive ? "active" : ""}`}
			>
				<img src={ingredientsIcon} alt="logo Ingrédients" />
				<span>Ingrédients</span>
			</Link>
		</div>
	);
}

export default NavigateBar;
