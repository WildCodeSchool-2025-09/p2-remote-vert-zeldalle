import { useEffect, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import RecipeDetail from "../components/RecipeDetail";
import { useFilters } from "../components/contexts/FiltersContext";
import { INGREDIENTS_API, RECIPES_API } from "../constants";
import type {
	FilterKey,
	Ingredient,
	Recipe,
	SelectedItem,
	TypeKey,
} from "../type";
import { effectMap, typeMap } from "../type";

function Recipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);

	const { hearts, filters, types } = useFilters();

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement des ingrédients"));
	}, []);

	useEffect(() => {
		fetch(RECIPES_API)
			.then((res) => res.json())
			.then((recipesData: Recipe[]) => {
				const enriched = recipesData.map((recipe) => ({
					...recipe,
					ingredients: recipe.ingredient_ids
						.map((id) => ingredients.find((ing) => ing.id === id))
						.filter(Boolean) as Ingredient[],
				}));
				setRecipes(enriched);
			})
			.catch(() => console.error("Erreur lors du chargement des recettes"));
	}, [ingredients]);

	const filteredRecipes = recipes.filter((recipe) => {
		if (hearts > 0 && recipe.hearts < hearts) return false;

		const activeTypes = (Object.keys(types) as TypeKey[]).filter(
			(key) => types[key],
		);
		if (
			activeTypes.length > 0 &&
			!activeTypes.some((key) =>
				recipe.ingredients?.some((ingredient) =>
					typeMap[key].some(
						(val) =>
							val.toLowerCase().trim() ===
							ingredient.category.toLowerCase().trim(),
					),
				),
			)
		) {
			return false;
		}

		const activeFilters = (Object.keys(filters) as FilterKey[]).filter(
			(key) => filters[key],
		);
		if (
			activeFilters.length > 0 &&
			!activeFilters.some((key) =>
				effectMap[key].some(
					(val) =>
						val.toLowerCase().trim() === recipe.effect.toLowerCase().trim(),
				),
			)
		) {
			return false;
		}

		return true;
	});

	return (
		<>
			{filteredRecipes.length > 0 ? (
				<ItemList
					items={filteredRecipes}
					type="recipe"
					onSelect={setSelectedRecipe}
				/>
			) : (
				<p>Aucune recette trouvée.</p>
			)}
			{selectedRecipe && selectedRecipe.type === "recipe" && (
				<RecipeDetail recipe={selectedRecipe.item} />
			)}
			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</>
	);
}

export default Recipes;
