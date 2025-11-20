import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type, onSelect }: ItemCardProps) {
	return (
		<div className="item-card-wrapper">
			<button
				type="button"
				className="item-card"
				onClick={() => onSelect({ item, type })}
			>
				<img
					src={`/images/${type === "ingredient" ? "ingredients" : "recipes"}/${item.image}`}
					alt={item.name}
				/>
			</button>
		</div>
	);
}

export default ItemCard;
