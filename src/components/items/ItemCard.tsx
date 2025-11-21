import type { Ingredient, Recipe, ItemCardProps } from "../../type";
import "./ItemCard.css";

export default function ItemCard({ item, type, onSelect }: ItemCardProps) {
	const imagePath =
		type === "ingredient"
			? `/images/ingredients/${(item as Ingredient).image}`
			: `/images/recipes/${(item as Recipe).image}`;

	const handleClick = () => {
		if (type === "ingredient") {
			onSelect(item as Ingredient); // simple item pour les ingrédients
		} else {
			onSelect({ item, type }); // objet avec type pour les recettes
		}
	};

	return (
		<div
			className="item-card"
			role="button"
			tabIndex={0}
			onClick={handleClick}
			onKeyDown={(e) => e.key === "Enter" && handleClick()}
			style={{ cursor: "pointer" }}
		>
			<img
				src={imagePath}
				alt={item.name}
				onError={() => console.warn("Image introuvable :", imagePath)}
			/>
		</div>
	);
}
