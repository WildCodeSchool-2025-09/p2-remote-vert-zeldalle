import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type }: ItemCardProps) {
	if (type === "ingredient") {
		const ingredient = item as Ingredient;

		return (
			// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<div className="item-card" onClick={() => onselect?.(item)}>
				<img
					src={`/ingredientsImg/${ingredient.image}`}
					alt={ingredient.name}
				/>
			</div>
		);
	}
	if (type === "recipe") {
		const recipe = item as Recipe;

		return (
			<div className="item-card">
				<img src={`/recipeImg/${recipe.image}`} alt={recipe.name} />
			</div>
		);
	}
	/*return (
		<button
			className="item-card"
			/*onClick={onIncrement}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					onIncrement();
				}
			}}
			type="button">
			<img src={`/ingredientsImg/${item.image}`} alt={item.name} />
			<p>{count}</p>
		</button>*/

	return null;
}

export default ItemCard;
