import { useEffect, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import RecipeDetail from "../components/RecipeDetail";
import ItemList from "../components/items/ItemList";
import { RECIPES_API } from "../constants";
import type { Ingredient, Recipe } from "../type";

function Recipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);

	useEffect(() => {
		fetch(RECIPES_API)
			.then((res) => res.json())
			.then((recipesData) => setRecipes(recipesData))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return (
		<>
			<ItemList
				items={recipes}
				type="recipe"
				onSelect={(recipe) => {
					setSelectedIngredient(null);
					setSelectedRecipe(recipe);
				}}
			/>

			{selectedRecipe && (
				<RecipeDetail
					recipe={selectedRecipe}
					onIngredientSelect={(ingredient) => setSelectedIngredient(ingredient)}
				/>
			)}

			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</>
	);
}

export default Recipes;
