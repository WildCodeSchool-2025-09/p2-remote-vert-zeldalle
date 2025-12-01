import { useEffect, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import ItemList from "../components/items/ItemList";
import { INGREDIENTS_API } from "../constants";
import type { Ingredient } from "../type";

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	const handleSelect = (ingredient: Ingredient) => {
		setSelectedIngredient(ingredient);
	};

	return (
		<div>
			<ItemList items={ingredients} type="ingredient" onSelect={handleSelect} />

			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</div>
	);
}
