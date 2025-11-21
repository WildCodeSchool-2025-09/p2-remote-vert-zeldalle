import { Link, useLocation } from "react-router-dom";
import ingredientsIcon from "../assets/icons/IconIngredient.png";
import inventoryIcon from "../assets/icons/IconInventaire.png";
import recipesIcon from "../assets/icons/IconRecette.png";
import "./NavigationBar.css";

function NavigateBar() {
	const location = useLocation();

	const recipesActive = location.pathname === "/recipes";
	const inventoryActive = location.pathname === "/inventory";
	const ingredientActive = location.pathname === "/ingredients";

	return (
		<div className="navContainer">
			<Link
				to="/recettes"
				className={`navCard ${recipesActive ? "active" : ""}`}
			>
				<img src={recipesIcon} alt="" />
				<span>Recettes</span>
			</Link>

			<Link
				to="/inventory"
				className={`navCard ${inventoryActive ? "active" : ""}`}
			>
				<img src={inventoryIcon} alt="" />
				<span>Inventaire</span>
			</Link>

			<Link
				to="/ingredients"
				className={`navCard ${ingredientActive ? "active" : ""}`}
			>
				<img src={ingredientsIcon} alt="" />
				<span>Ingrédients</span>
			</Link>
		</div>
	);
}

export default NavigateBar;
