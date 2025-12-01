import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

export default function ItemCard({
	item,
	type,
	onSelect,
	isSelected,
}: ItemCardProps) {
	const imagePath =
		type === "ingredient"
			? `/images/ingredients/${(item as Ingredient).image}`
			: `/images/recipes/${(item as Recipe).image}`;

	const handleClick = () => {
		onSelect?.(item);
	};

	return (
		<button
			type="button"
			className={`item-card ${isSelected ? "selected" : ""}`}
			onClick={handleClick}
		>
			<img
				src={imagePath}
				alt={item.name}
				onError={() => console.warn("Image introuvable :", imagePath)}
			/>
		</button>
	);
}
