import type { IngredientType } from "./type/IngredientType";

interface DetailIngredientProps {
	ingredient: IngredientType;
}

export default function DetailIngredient({
	ingredient,
}: DetailIngredientProps) {
	if (!ingredient) {
		return <p>Aucun ingrédient sélectionné</p>;
	}

	return (
		<div className="ingredient-detail">
			<h2>{ingredient.name}</h2>
			<p>{ingredient.description}</p>
			<p>Catégorie : {ingredient.category}</p>
			<p>Effet : {ingredient.effect}</p>
		</div>
	);
}
