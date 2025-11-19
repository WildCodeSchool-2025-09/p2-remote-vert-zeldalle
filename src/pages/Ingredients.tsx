import { useEffect, useState } from "react";
import ItemList from "../components/Items/ItemList";
import { INGREDIENTS_API } from "../constants";
import type { Ingredient } from "../type";

function Ingredients() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json() as Promise<Ingredient[]>)
			.then((data) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={ingredients} type="ingredient" />;
}

export default Ingredients;
