import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import { INGREDIENTS_API } from "../constants";
import { useFilters } from "../contexts/FiltersContext";
import type { Ingredient } from "../type";

export default function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	const { filters } = useFilters();

	return <ItemList items={ingredients} type="ingredient" />;
}
