import { useState, useEffect } from "react";
import "./Items/ItemList.css";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient } from "../type";
import "./DetailIngredient.css";
import MapDisplay from "./MapDisplay";

interface DetailIngredientProps {
  ingredient: Ingredient;
}

export default function DetailIngredient({ ingredient }: DetailIngredientProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { inventory, addIngredient, removeIngredient } = useInventory();

  const initialQuantity =
    inventory.filter((item) => item.id === ingredient.id).length;
  const [count, setCount] = useState(initialQuantity);

  useEffect(() => {
    const newQuantity = inventory.filter((item) => item.id === ingredient.id).length;
    setCount(newQuantity);
  }, [ingredient, inventory]);

  const handleAddToInventory = () => {
    addIngredient(ingredient);
    setCount((prev) => prev + 1);
  };

  const handleLessFromInventory = () => {
    if (count > 0) {
      removeIngredient(ingredient.id);
      setCount((prev) => prev - 1);
    }
  };

  if (!ingredient) return <p>Aucun ingrédient sélectionné</p>;

  return (
    <div className="ingredient-detail">
      <div className="ImageIngredient">
        <img
          className="ImageIngredientsetting"
          src={`/images/ingredients/${ingredient.image}`}
          alt={ingredient.name}
        />
      </div>

      <div className="InfoIngredient">
        <div className="NomIngredient">
          <h4>{ingredient.name}</h4>
          {ingredient.description}
        </div>
		
          <button
            type="button"
            className="MapButton"
            onClick={() => setIsMapOpen(true)}
			width={100}
			hight={70}
          >
            <img src="/images/MapButton.png" alt="" width={70} />
          </button>

          {isMapOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsMapOpen(false)}
            >
              <button
                className="CloseMapButton"
                type="button"
                onClick={() => setIsMapOpen(false)}
              >
                X
              </button>
              <div
                className="modal-content"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                <MapDisplay ingredient={ingredient} />
              </div>
            </div>
          )}




        <div className="RightDetails">
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
          {/* Compteur */}
          <div className="CounterButtons">
            <button
              type="button"
              className="BtnMinus"
              onClick={handleLessFromInventory}
            >
              –
            </button>

            <p className="CountNumber">{count}</p>

            <button
              type="button"
              className="BtnPlus"
              onClick={handleAddToInventory}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}