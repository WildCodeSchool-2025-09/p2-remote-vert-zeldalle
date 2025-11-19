import { useInventory } from "../../contexts/InventoryContext";
import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type }: ItemCardProps) {
	if (type === "ingredient") {
		const ingredient = item as Ingredient;
		const { addIngredient } = useInventory();

		return (
			<div className="item-card">
				<button
					type="button"
					onClick={() => addIngredient(item)}
					className="item-card-button"
				>
					<img
						src={`/images/ingredients/${ingredient.image}`}
						alt={ingredient.name}
					/>
				</button>
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
}

export default ItemCard;
