import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient } from "../type";

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const { addIngredient } = useInventory();

	const API = import.meta.env.VITE_API_INGREDIENTS;

	useEffect(() => {
		fetch(API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur chargement ingrédients"));
	}, []); // ← OK : pas besoin de dépendances

	const handleSelect = ({ item }: { item: Ingredient }) => {
		addIngredient(item);
	};

	return (
		<ItemList items={ingredients} type="ingredient" onSelect={handleSelect} />
	);
}
