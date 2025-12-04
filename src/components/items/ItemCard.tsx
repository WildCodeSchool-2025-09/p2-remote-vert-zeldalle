import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

export default function ItemCard({
	item,
	type,
	onSelect,
	quantity,
	isSelected,
	craftable,
}: ItemCardProps & { quantity?: number; craftable?: boolean }) {
	const imagePath =
		type === "ingredient"
			? `/images/ingredients/${(item as Ingredient).image}`
			: `/images/recipes/${(item as Recipe).image}`;

	const handleClick = () => {
		if (type === "ingredient") {
			onSelect(item as Ingredient);
		} else {
			onSelect({ item, type });
		}
	};

	return (
		<button
			type="button"
			className={`item-card ${isSelected ? "selected" : ""} ${craftable === false ? "incomplete" : ""}`}
			onClick={handleClick}
		>
			<img
				src={imagePath}
				alt={item.name}
				onError={() => console.warn("Image introuvable :", imagePath)}
			/>
			{quantity !== undefined && quantity > 0 && (
				<p className="quantity">{quantity} </p>
			)}
		</button>
	);
}
