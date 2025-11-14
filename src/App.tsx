import { useState } from "react";
import IngredientMap from "./components/IngredientMap";
import MapDisplay from "./components/MapDisplay";
import { Ingredient } from "./Ingredient";

export default function App() {
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  return (
    <div>
      <h1>Zeldappétit</h1>

      <IngredientMap onSelect={setSelectedIngredient} />
      {selectedIngredient && (
        <MapDisplay ingredient={selectedIngredient} />
      )}
    </div>
  );
}