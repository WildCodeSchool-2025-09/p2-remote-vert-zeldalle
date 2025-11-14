import { useEffect, useState } from "react";
import { IngredientType } from "./type/IngredientType";

interface MapProps {
  onSelect: (ingredient: Ingredient) => void;
}

export default function IngredientMap({ onSelect }: MapProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await fetch(import.meta.env.VITE_API_INGREDIENTS);

        if (!response.ok) {
          console.error("Erreur HTTP :", response.status);
          return;
        }

        const text = await response.text();
        console.log("Réponse brute :", text);

        const data: Ingredient[] = JSON.parse(text);

        const mapPixels = data.map((ingredient) => ({
          ...ingredient,
          x_pixel: (ingredient.coords.x / 100) * 3200,
          y_pixel: (ingredient.coords.y / 100) * 2400,
        }));

        setIngredients(mapPixels);
      } catch (err) {
        console.error("Erreur de récupération :", err);
      }
    }

    fetchIngredients();
  }, []);

  return (
    <div>
      {ingredients.length === 0 && <p>Chargement des ingrédients…</p>}

      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <span>{ingredient.name}</span>
          <br />
          <button onClick={() => onSelect(ingredient)}>
            Voir sur la carte
          </button>
        </div>
      ))}
    </div>
  );
}