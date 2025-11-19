import type { DetailItemProps, Ingredient, Recipe } from "../type";
import ItemCard from "./Items/ItemCard";
import "./DetailItem.css";

function DetailItem({ item, type, ingredients }: DetailItemProps) {
	if (type === "recipe") {
		const recipe = item as Recipe;
		const recipeIngredients = ingredients.filter((ingredient) =>
			recipe.ingredient_ids.includes(ingredient.id),
		);

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

				<div className="">
					<div className="ImageEffectsetting">
						<img
							src={`/images/effects/${recipe.effect_image}`}
							alt={recipe.effect}
						/>

						<div className="heart-wrapper">
							<img
								src={`/images/effects/${recipe.heart_image}`}
								alt="Rend des coeurs"
							/>
							<span className="heart-count">{recipe.hearts}</span>
						</div>

						<img src="/images/effects/timerIcon.png" alt="Durée de l'effet" />

						<span>{recipe.duration}</span>
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

	if (type === "ingredient") {
		const ingredient = item as Ingredient;

		return <></>;
	}
	return null;
}

export default DetailItem;
