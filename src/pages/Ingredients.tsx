import { useState } from "react";
import { Ingredient } from "../type";
import ItemList from "../components/Items/ItemList";
import IngredientMap from "../components/IngredientMap";
import MapDisplay from "../components/MapDisplay";
import DetailIngredient from "../components/DetailIngredient";

export default function Ingredients() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <div>
      <h1>Ingrédients</h1>
      <ItemList type="ingredient" onSelect={setSelectedIngredient} />

      <IngredientMap onSelect={setSelectedIngredient} />

      {selectedIngredient && <DetailIngredient ingredient={selectedIngredient} />}
    </div>
  );
}
