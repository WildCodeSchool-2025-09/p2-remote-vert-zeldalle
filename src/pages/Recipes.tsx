import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import type { Recipe } from "../type";

function Recipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const RECIPES_API = import.meta.env.VITE_API_RECIPES;

	useEffect(() => {
		fetch(RECIPES_API)
			.then((res) => res.json())
			.then((data: Recipe[]) => setRecipes(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={recipes} type="recipe" />;
}

export default Recipes;
