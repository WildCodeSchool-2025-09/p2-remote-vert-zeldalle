import { useEffect, useState } from "react";
import ItemList from "../components/Items/ItemList";
import { useFilters } from "../components/contexts/FiltersContext";
import type { Ingredient } from "../type";
import { effectMap, typeMap } from "../type";

function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const INGREDIENTS_API = import.meta.env.VITE_API_INGREDIENTS;

	const { hearts, filters, types } = useFilters();

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	const filteredIngredients = ingredients.filter((ingredient) => {
		if (hearts > 0 && ingredient.hearts < hearts) return false;

		const activeTypes = Object.keys(types).filter(
			(key) => types[key as keyof typeof types],
		);
		if (
			activeTypes.length > 0 &&
			!activeTypes.some((key) =>
				typeMap[key as keyof typeof typeMap].some(
					(val) =>
						val.toLowerCase().trim() ===
						ingredient.category.toLowerCase().trim(),
				),
			)
		) {
			return false;
		}

		const activeFilters = Object.keys(filters).filter(
			(key) => filters[key as keyof typeof filters],
		);
		if (
			activeFilters.length > 0 &&
			!activeFilters.some((key) =>
				effectMap[key as keyof typeof effectMap].some(
					(val) =>
						val.toLowerCase().trim() === ingredient.effect.toLowerCase().trim(),
				),
			)
		) {
			return false;
		}

		return true;
	});

	return filteredIngredients.length > 0 ? (
		<ItemList items={filteredIngredients} type="ingredient" />
	) : (
		<p>Aucun ingrédient trouvé.</p>
	);
}

export default Ingredients;
