import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import type { Ingredient } from "../type";

const INGREDIENTS_API = "http://localhost:3000/ingredients"; // adapte si nécessaire

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={ingredients} type="ingredient" />;
}
