import { useEffect, useState } from "react";
import DetailItem from "../components/DetailItem";
import ItemList from "../components/Items/ItemList";
import { INGREDIENTS_API, RECIPES_API } from "../constants";
import type { Recipe } from "../type";
import type { Ingredient } from "../type";

function Recipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedItem, setSelectedItem] = useState<{
		item: Recipe | Ingredient;
		type: string;
	} | null>(null);

	useEffect(() => {
		Promise.all([
			fetch(RECIPES_API).then((res) => res.json()),
			fetch(INGREDIENTS_API).then((res) => res.json()),
		])
			.then(([recipesData, ingredientsData]) => {
				setRecipes(recipesData);
				setIngredients(ingredientsData);
			})
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return (
		<>
			<ItemList items={recipes} type="recipe" onSelect={setSelectedItem} />
			{selectedItem && (
				<DetailItem
					item={selectedItem.item}
					type={selectedItem.type}
					ingredients={ingredients}
				/>
			)}
		</>
	);
}

export default Recipes;
