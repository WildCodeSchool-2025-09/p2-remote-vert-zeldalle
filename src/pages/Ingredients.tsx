import { useEffect, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import IngredientMap from "../components/IngredientMap";
import ItemList from "../components/Items/ItemList";
import { INGREDIENTS_API } from "../constants";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient } from "../type";

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);
	const { addIngredient } = useInventory();

	const API = import.meta.env.VITE_API_INGREDIENTS;

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

			<IngredientMap
				onSelect={(ingredient) => {
					setSelectedIngredient(ingredient);
				}}
			/>

			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</div>
	);
}
