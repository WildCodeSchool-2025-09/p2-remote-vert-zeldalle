import "./DetailIngredient.css";
import { useState } from "react";
import type { Ingredient } from "../type";
import MapDisplay from "./MapDisplay";

interface DetailIngredientProps {
	ingredient: Ingredient;
}

export default function DetailIngredient({
	ingredient,
}: DetailIngredientProps) {
	const [count, setCount] = useState(0);
	const [isMapOpen, setIsMapOpen] = useState(false);

	if (!ingredient) return <p>Aucun ingrédient sélectionné</p>;

	return (
		<div className="ingredient-detail">
			<div className="ImageIngredient">
				<img
					className="ImageIngredientsetting"
					src={`/ingredientsImg/${ingredient.image}`}
					alt={ingredient.name}
				/>
			</div>

			<div className="InfoIngredient">
				<div className="NomIngredient">
					<h4>{ingredient.name}</h4>
					{ingredient.description}
				</div>

				<div className="ImageEffectsetting">
					{ingredient.effect_image && (
						<img
							className="ImageEffect"
							src={`/Iconesimg/${ingredient.effect_image}`}
							alt={ingredient.effect}
						/>
					)}
					{ingredient.hearts_image && (
						<img
							className="ImageEffect"
							src={`/Iconesimg/${ingredient.hearts_image}`}
							alt={ingredient.hearts_image}
						/>
					)}
				</div>

				<div className="RightDetails">
					{/* Bouton pour ouvrir la modale */}
					<button
						type="button"
						className="MapButton"
						onClick={() => setIsMapOpen(true)}
					>
						<img src="/images/MapButton.png" alt="" />
					</button>

					{/* Modale */}
					{isMapOpen && (
						<div className="modal-overlay" onClick={() => setIsMapOpen(false)}>
							<div
								className="modal-content"
								role="dialog"
								aria-modal="true"
								onClick={(e) => e.stopPropagation()}
							>
								<MapDisplay ingredient={ingredient} />
							</div>
						</div>
					)}

					{/* Compteur */}
					<div className="CounterButtons">
						<button
							type="button"
							className="BtnMinus"
							onClick={() => count > 0 && setCount(count - 1)}
						>
							–
						</button>
						<p className="CountNumber">{count}</p>
						<button
							type="button"
							className="BtnPlus"
							onClick={() => setCount(count + 1)}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
