import { useEffect, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import IngredientMap from "../components/IngredientMap";
import ItemList from "../components/items/ItemList";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient } from "../type";

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);
	const { addIngredient } = useInventory();

	const API = import.meta.env.VITE_API_INGREDIENTS;

	useEffect(() => {
		fetch(API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => {
				setIngredients(data);
			})
			.catch(() => console.error("❌ Erreur chargement ingrédients"));
	}, []);

	const handleSelect = (ingredient: Ingredient) => {
		setSelectedIngredient(ingredient);
		addIngredient(ingredient);
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
