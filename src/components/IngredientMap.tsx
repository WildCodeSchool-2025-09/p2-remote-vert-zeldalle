import { useEffect, useState } from "react";
import type { IngredientType } from ".../type/";

interface MapProps {
  onSelect: (ingredient: IngredientType) => void;
}

export default function IngredientMap({ onSelect }: MapProps) {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_INGREDIENTS)
      .then(res => res.json())
      .then(data => {
        const mapPixels = data.map(ingredient => ({
          ...ingredient,
          x_pixel: (ingredient.coords.x / 100) * 3200,
          y_pixel: (ingredient.coords.y / 100) * 2400,
        }));
        setIngredients(mapPixels);
      });
  }, []);

  return 
}