import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ingredientsIcon from "../assets/icons/IconIngredient.png";
import inventoryIcon from "../assets/icons/IconInventaire.png";
import recipesIcon from "../assets/icons/IconRecette.png";

function NavigateBar() {
	const location = useLocation();
	const recipesActive = location.pathname === "/recipes";
	const inventoryActive = location.pathname === "/inventory";
	const ingredientActive = location.pathname === "/ingredients";
	return (
		<div>
			<Link
				to="/recipes"
				className={recipesActive ? "ButtonRecipes active" : "ButtonRecipes"}
			>
				<img src={recipesIcon} alt="" />
				<span>Recettes</span>
			</Link>
			<Link
				to="/inventory"
				className={
					inventoryActive ? "ButtonInventory active" : "ButtonInventory"
				}
			>
				<img src={inventoryIcon} alt="Inventaire" />
				<span>Inventaire</span>
			</Link>
			<Link
				to="/ingredients"
				className={
					ingredientActive ? "ButtonIngredients active" : "ButtonIngredients"
				}
			>
				<img src={ingredientsIcon} alt="Ingrédients" />
				<span>Ingrédients</span>
			</Link>
		</div>
	);
}
