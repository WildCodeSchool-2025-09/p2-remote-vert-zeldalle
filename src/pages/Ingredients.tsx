import { useEffect, useState } from "react";
import ItemList from "../components/Items/ItemList";
import type { Ingredient } from "../type";

function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const INGREDIENTS_API = import.meta.env.VITE_API_INGREDIENTS;

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={ingredients} type="ingredient" />;
}

export default Ingredients;
