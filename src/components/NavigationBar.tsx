import { Link, useLocation } from "react-router-dom";
import ingredientsIcon from "../components/assets/IconIngredient.png";
import inventoryIcon from "../components/assets/IconInventaire.png";
import recipesIcon from "../components/assets/IconRecette.png";
import "./NavigationBar.css";

function NavigateBar() {
	const location = useLocation();

	const recipesActive = location.pathname === "/recettes";
	const inventoryActive = location.pathname === "/inventory";
	const ingredientActive = location.pathname === "/ingredients";

	return (
		<div className="navContainer">
			<Link
				to="/recettes"
				className={`nav-card ${recipesActive ? "active" : ""}`}
			>
				<img src={recipesIcon} alt="logo recettes" />
				<span>Recettes</span>
			</Link>

			<Link
				to="/inventory"
				className={`nav-card ${inventoryActive ? "active" : ""}`}
			>
				<img src={inventoryIcon} alt="logo inventory" />
				<span>Inventaire</span>
			</Link>

			<Link
				to="/ingredients"
				className={`nav-card ${ingredientActive ? "active" : ""}`}
			>
				<img src={ingredientsIcon} alt="logo Ingrédients" />
				<span>Ingrédients</span>
			</Link>
		</div>
	);
}

export default NavigateBar;
