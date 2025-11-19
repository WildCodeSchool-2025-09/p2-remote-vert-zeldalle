<<<<<<< HEAD
import { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import type { Ingredient } from "../type";
=======
import { useState } from "react";
import { Ingredient } from "../type";
import ItemList from "../components/Items/ItemList";
import IngredientMap from "../components/IngredientMap";
import MapDisplay from "../components/MapDisplay";
import DetailIngredient from "../components/DetailIngredient";
>>>>>>> 81304e7232340803b6a960a1dc81c5084a318080

export default function Ingredients() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

<<<<<<< HEAD
	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((res) => res.json())
			.then((data: Ingredient[]) => setIngredients(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={ingredients} type="ingredient" />;
}

export default Ingredients;
=======
  return (
    <div>
      <h1>Ingrédients</h1>
      <ItemList type="ingredient" onSelect={setSelectedIngredient} />

      <IngredientMap onSelect={setSelectedIngredient} />

      {selectedIngredient && <DetailIngredient ingredient={selectedIngredient} />}
    </div>
  );
}
>>>>>>> 81304e7232340803b6a960a1dc81c5084a318080
