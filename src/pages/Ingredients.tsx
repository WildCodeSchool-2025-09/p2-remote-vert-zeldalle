import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient } from "../type";
import DetailIngredient from "../components/DetailIngredient";
import IngredientMap from "../components/IngredientMap";
import MapDisplay from "../components/MapDisplay";

export default function Ingredients() {
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const { addIngredient } = useInventory();

	const API = import.meta.env.VITE_API_INGREDIENTS;

	console.log("🔎 URL API utilisée =", API); // TEST 1

	useEffect(() => {
		fetch(API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => {
				setIngredients(data);
			})
			.catch(() => console.error("❌ Erreur chargement ingrédients"));
	}, []);

	const handleSelect = ({ item }: { item: Ingredient }) => {
		addIngredient(item);
	};

	return (
		<div>
			<ItemList type="ingredient" onSelect={setSelectedIngredient} />

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
