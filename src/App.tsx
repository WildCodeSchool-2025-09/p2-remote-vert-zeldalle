import { useState } from "react";
import IngredientMap from "./components/IngredientMap";
import MapDisplay from "./components/MapDisplay";
import "./components/ingredients/IngredientCard.css";
import "./components/ingredients/IngredientList.css";
import DetailIngredient from "./components/DetailIngredient";

export default function App() {
	const [selectedIngredient, setSelectedIngredient] =
		useState<IngredientType | null>(null);

	return (
		<div>
			<h1>Zeldappétit</h1>
			<IngredientList onSelect={setSelectedIngredient} />

			<IngredientMap onSelect={setSelectedIngredient} />
			{selectedIngredient && <MapDisplay ingredient={selectedIngredient} />}
			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</div>
	);
}
