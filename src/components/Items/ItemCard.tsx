import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type }: ItemCardProps) {
	if (type === "ingredient") {
		const ingredient = item as Ingredient;

		return (
			<div className="item-card">
				<img
					src={`/images/ingredients/${ingredient.image}`}
					alt={ingredient.name}
				/>
			</div>
		);
	}
	if (type === "recipe") {
		const recipe = item as Recipe;

		return (
			<div className="item-card">
				<img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
			</div>
		);
	}

	return null;
}

export default ItemCard;
