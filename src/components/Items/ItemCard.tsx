import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type, onSelect }: ItemCardProps) {
	if (type === "ingredient") {
		const ingredient = item as Ingredient;

		return (
			<button
				type="button"
				className="item-card"
				onClick={() => onSelect?.({ item: ingredient, type: "ingredient" })}
			>
				<img
					src={`/images/ingredients/${ingredient.image}`}
					alt={ingredient.name}
				/>
			</button>
		);
	}

	if (type === "recipe") {
		const recipe = item as Recipe;

		return (
			<button
				type="button"
				className="item-card"
				onClick={() => onSelect?.({ item: recipe, type: "recipe" })}
			>
				<img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
			</button>
		);
	}
	return null;
}

export default ItemCard;
