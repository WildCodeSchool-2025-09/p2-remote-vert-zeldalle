import type { Ingredient, ItemCardProps, Recipe } from "../../type";
import "./ItemCard.css";

function ItemCard({ item, type, onSelect }: ItemCardProps) {
    if (type === "ingredient") {
        const ingredient = item as Ingredient;

        return (
<div
  className="item-card"
  role="button"
  tabIndex={0}
  onClick={() => onSelect(item)}
  onKeyDown={(e) => e.key === "Enter" && onSelect(item)}
>
  <img
    src={`/images/${type === "ingredient" ? "ingredients" : "recipes"}/${item.image}`}
    alt={item.name}
  />
</div>
        );
    }

    if (type === "recipe") {
        const recipe = item as Recipe;

        return (
            <button
                type="button"
                className="item-card"
                onClick={() => onSelect({ item: recipe, type: "recipe" })}
            >
                <img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
            </button>
        );
    }
    return null;
}

export default ItemCard;