import { useEffect, useState } from "react";
import { INGREDIENTS_API } from "../constants";
import type { Ingredient, RecipeDetailProps } from "../type";
import "./RecipeDetail.css";

function RecipeDetail({ recipe, onIngredientSelect }: RecipeDetailProps) {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const recipeIngredients = recipe?.ingredient_ids
		? ingredients.filter((ingredient) =>
				recipe.ingredient_ids.includes(ingredient.id),
			)
		: [];

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((recipesData) => setIngredients(recipesData))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return (
		<section className="detail-item">
			<div className="recipe-img">
				<img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
			</div>

			<div className="recipe-info">
				<h3 className="recipe-name">{recipe.name}</h3>
				<p className="recipe-description">{recipe.description}</p>
			</div>

			<div className="recipe-detail">
				<div className="image-effect">
					<img
						src={`/images/effects/${recipe.effect_image}`}
						alt={recipe.effect}
					/>
				</div>

				<div className="effect-duration">
					<img src="/images/effects/timerIcon.png" alt="DurÃ©e de l'effet" />
					<span className="text-duration">{recipe.duration}</span>
				</div>

				<div className="heart-wrapper">
					<img
						src={`/images/effects/${recipe.heart_image}`}
						alt="Rend des coeurs"
					/>
					<span className="heart-count">{recipe.hearts}</span>
				</div>

				<article className="ingredient-img">
					{recipeIngredients.map((ingredient) => (
						<button
							type="button"
							key={ingredient.id}
							className="ingredient-icon-btn"
							onClick={() => onIngredientSelect(ingredient)}
						>
							<img
								src={`/images/ingredients/${ingredient.image}`}
								alt={ingredient.name}
								className="ingredient-icon"
							/>
						</button>
					))}
				</article>
			</div>
		</section>
	);
}

export default RecipeDetail;
