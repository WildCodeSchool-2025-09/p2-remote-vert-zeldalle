import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import RecipeDetail from "../components/RecipeDetail";
import { RECIPES_API } from "../constants";
import type { Recipe, SelectedItem } from "../type";

function Recipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [selectedRecipe, setSelectedRecipe] = useState<SelectedItem | null>(
		null,
	);

	useEffect(() => {
		fetch(RECIPES_API)
			.then((res) => res.json())
			.then((recipesData) => setRecipes(recipesData))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return (
		<>
			<ItemList items={recipes} type="recipe" onSelect={setSelectedRecipe} />
			{selectedRecipe && selectedRecipe.type === "recipe" && (
				<RecipeDetail recipe={selectedRecipe.item} />
			)}
		</>
	);
}

export default Recipes;