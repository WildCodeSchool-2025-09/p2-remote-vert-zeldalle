import { useState } from "react";
import IngredientMap from "./components/IngredientMap";
import MapDisplay from "./components/MapDisplay";

export default function App() {
	const [selectedIngredient, setSelectedIngredient] =
		useState<IngredientMap | null>(null);

	return (
		<div>
			<h1>Zeldappétit</h1>

			<IngredientMap onSelect={setSelectedIngredient} />
			{selectedIngredient && <MapDisplay ingredient={selectedIngredient} />}
		</div>
	);
}
