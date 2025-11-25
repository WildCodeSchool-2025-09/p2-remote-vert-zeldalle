import { useEffect, useState } from "react";
import { INGREDIENTS_API } from "../constants";
import type { Ingredient, RecipeDetailProps } from "../type";
import ItemCard from "./Items/ItemCard";
import "./RecipeDetail.css";

function RecipeDetail({ recipe }: RecipeDetailProps) {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const recipeIngredients = ingredients.filter((ingredient) =>
		recipe.ingredient_ids.includes(ingredient.id),
	);

	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((recipesData) => setIngredients(recipesData))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return (
		<section className="detail-item">
			<div className="recipe-img">
				<ItemCard
					item={recipe}
					type="recipe"
					count={0}
					onIncrement={() => {}}
					onSelect={() => {}}
				/>
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

				<div className="heart-wrapper">
					<img
						src={`/images/effects/${recipe.heart_image}`}
						alt="Rend des coeurs"
					/>
					<span className="heart-count">{recipe.hearts}</span>
				</div>

				<div className="effect-duration">
					<img src="/images/effects/timerIcon.png" alt="Durée de l'effet" />
					<span className="text-duration">{recipe.duration}</span>
				</div>

				<article className="ingredient-img">
					{recipeIngredients.map((ingredient) => (
						<img
							key={ingredient.id}
							src={`/images/ingredients/${ingredient.image}`}
							alt={ingredient.name}
							className="ingredient-icon"
						/>
					))}
				</article>
			</div>
		</section>
	);
}

export default RecipeDetail;
