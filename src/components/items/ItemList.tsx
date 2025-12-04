import { useEffect, useRef, useState } from "react";
import "./ItemList.css";
import { useInventory } from "../../contexts/InventoryContext";
import type { Ingredient, Recipe } from "../../type";
import ItemCard from "./ItemCard";

interface ItemListProps {
	type: "ingredient" | "recipe";
	onSelect: (item: Ingredient | Recipe) => void;
	grayscaleUncraftable?: boolean;
}

export default function ItemList({
	type,
	onSelect,
	grayscaleUncraftable,
}: ItemListProps) {
	const [items, setItems] = useState<Ingredient[] | Recipe[]>([]);
	const [page, setPage] = useState(0);
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const { inventory } = useInventory();

	const scrollRef = useRef<HTMLDivElement | null>(null);
	const itemsPerPage = 12;

	const inventoryIds = inventory.map((i) => i.id);

	function isCraftable(recipe: Recipe) {
		return recipe.ingredient_ids.every((id) => inventoryIds.includes(id));
	}

	useEffect(() => {
		const API =
			type === "ingredient"
				? import.meta.env.VITE_API_INGREDIENTS
				: import.meta.env.VITE_API_RECIPES;

		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				if (type === "ingredient") {
					setItems(data as Ingredient[]);
				} else {
					setItems(data as Recipe[]);
				}
			})
			.catch(() => console.error("❌ Erreur chargement items"));
	}, [type]);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	const pages: (Ingredient | Recipe)[][] = [];
	for (let i = 0; i < totalPages; i++) {
		const start = i * itemsPerPage;
		const end = start + itemsPerPage;
		pages.push(items.slice(start, end));
	}

	const handleScroll = () => {
		const container = scrollRef.current;
		if (!container) return;

		const newPage = Math.round(container.scrollLeft / container.clientWidth);

		if (newPage !== page) setPage(newPage);
	};

	return (
		<section className="item-list-wrapper">
			<div className="item-list" ref={scrollRef} onScroll={handleScroll}>
				{pages.map((pageItems) => (
					<div className="item-page" key={pageItems[0]?.id}>
						{pageItems.map((item) => (
							<ItemCard
								key={item.id}
								item={item}
								type={type}
								isSelected={selectedId === item.id}
								quantity={
									type === "ingredient"
										? inventory.filter((i) => i.id === item.id).length
										: undefined
								}
								craftable={
									type === "recipe" && grayscaleUncraftable
										? isCraftable(item as Recipe)
										: undefined
								}
								onSelect={() => {
									setSelectedId(item.id);
									onSelect(item);
								}}
							/>
						))}
					</div>
				))}
			</div>

			<div className="pagination-dots">
				{pages.map((pageItems, i) => (
					<span
						key={pageItems.map((p) => p.id).join("-")}
						className={i === page ? "dot active" : "dot"}
					/>
				))}
			</div>
		</section>
	);
}
