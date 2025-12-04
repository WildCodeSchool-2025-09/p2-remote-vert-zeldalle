import { useRef, useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import RecipeDetail from "../components/RecipeDetail";
import ItemCard from "../components/items/ItemCard";
import ItemList from "../components/items/ItemList";
import { useInventory } from "../contexts/InventoryContext";
import type { Ingredient, Recipe } from "../type";
import "./Inventory.css";

function Inventory() {
	const { inventory } = useInventory();

	const [selectedIngredient, setSelectedIngredient] =
		useState<Ingredient | null>(inventory.length > 0 ? inventory[0] : null);
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

	const handleSelectIngredient = (item: Ingredient) => {
		setSelectedIngredient(item);
		setSelectedRecipe(null);
	};

	const groupedInventory = Object.values(
		inventory.reduce(
			(acc, item) => {
				if (!acc[item.id]) {
					acc[item.id] = { ...item, quantity: 0 };
				}
				acc[item.id].quantity += 1;
				return acc;
			},
			{} as Record<number, Ingredient & { quantity: number }>,
		),
	);

	const [activePage, setActivePage] = useState(0);
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const itemsPerPage = 8;
	const pages = [];

	const handleScroll = () => {
		if (!scrollRef.current) return;
		const pageWidth = scrollRef.current.clientWidth;
		const pageIndex = Math.round(scrollRef.current.scrollLeft / pageWidth);
		setActivePage(pageIndex);
	};

	for (let i = 0; i < groupedInventory.length; i += itemsPerPage) {
		pages.push(groupedInventory.slice(i, i + itemsPerPage));
	}

	return (
		<div className="inventory-wrapper">
			<div className="inventory-list" ref={scrollRef} onScroll={handleScroll}>
				{groupedInventory.length === 0 && (
					<p className="inventory-empty">Va sélectionner tes ingrédients</p>
				)}
				{groupedInventory.length > 0 &&
					pages.map((pageItems) => (
						<div className="inventory-page" key={pageItems.map(item => item.id).join("-")}>
							{pageItems.map((item) => (
								<ItemCard
									key={item.id}
									item={item}
									type="ingredient"
									quantity={item.quantity}
									onSelect={() => handleSelectIngredient(item)}
								/>
							))}
						</div>
					))
				}
			</div>

			<div className="inventory-pagination">
				{pages.map((pageItems, pageIndex) => (
  					<span key={pageItems.map(item => item.id).join("-")}
    					className={`inventory-dot ${pageIndex === activePage ? "active" : ""}`}
					/>
				))}
			</div>

			<ItemList
				type="recipe"
				grayscaleUncraftable={true}
				onSelect={(recipe) => {
					setSelectedIngredient(null);
					setSelectedRecipe(recipe as Recipe);
				}}
			/>

			{selectedRecipe && (
				<RecipeDetail
					recipe={selectedRecipe}
					onIngredientSelect={(ingredient) => setSelectedIngredient(ingredient)}
				/>
			)}
			{selectedIngredient && (
				<DetailIngredient ingredient={selectedIngredient} />
			)}
		</div>
	);
}

export default Inventory;
