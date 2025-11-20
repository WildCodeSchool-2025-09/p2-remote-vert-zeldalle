import { useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import IngredientMap from "../components/IngredientMap";
import ItemList from "../components/Items/ItemList";
import MapDisplay from "../components/MapDisplay";

export default function Ingredients() {
	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(null);

	return (
		<div>
			<ItemList type="ingredient" onSelect={setSelectedIngredient} />

			<IngredientMap
				onSelect={(ingredient) => {
					setSelectedIngredient(ingredient);
				}}
			/>

			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</div>
	);
}
