import { useState, useEffect } from "react";
import type { Ingredient } from "../type";
import { useInventory } from "../contexts/InventoryContext";
import "./DetailIngredient.css";

interface DetailIngredientProps {
	ingredient: Ingredient;
}

export default function DetailIngredient({
	ingredient,
}: DetailIngredientProps) {
	const [count, setCount] = useState(0);
	const { addIngredient, inventory } = useInventory();

	useEffect(() => {
		const existing = inventory.find((i) => i.id === ingredient.id);
		setCount(existing ? existing.quantity : 0);
	}, [ingredient, inventory]);

	return (
		<div className="ingredient-detail">
			<img src={`/ingredientsImg/${ingredient.image}`} alt={ingredient.name} />
			<h4>{ingredient.name}</h4>
			<p>{ingredient.description}</p>

			<div className="counter">
				<button type="button" onClick={() => {
						if (count > 0) {
							setCount(count - 1);
							addIngredient({ ...ingredient, quantity: count - 1 });
						}
					}}
				>
					–
				</button>
				<span>{count}</span>
				<button type="button"
					onClick={() => {
						setCount(count + 1);
						addIngredient({ ...ingredient, quantity: count + 1 });
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}