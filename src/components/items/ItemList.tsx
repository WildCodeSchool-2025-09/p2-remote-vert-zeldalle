import { useEffect, useState } from "react";
import type { Ingredient, Recipe } from "../../type";
import ItemCard from "./ItemCard";
import "./ItemList.css";
import { useInventory } from "../../contexts/InventoryContext";

interface ItemListProps {
	type: "ingredient" | "recipe";
	onSelect: (item: Ingredient | Recipe) => void;
}

export default function ItemList({ type, onSelect }: ItemListProps) {
	const [items, setItems] = useState<(Ingredient | Recipe)[]>([]);
	const [page, setPage] = useState(0);
	const itemsPerPage = 16;

	useEffect(() => {
		const API =
			type === "ingredient"
				? import.meta.env.VITE_API_INGREDIENTS
				: import.meta.env.VITE_API_RECIPES;

		fetch(API)
			.then((res) => res.json())
			.then((data) => setItems(data))
			.catch(() => console.error("❌ Erreur chargement items"));
	}, [type]);
	const { inventory } = useInventory();

	const currentItems = items.slice(
		page * itemsPerPage,
		(page + 1) * itemsPerPage,
	);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	return (
		<section className="item-list-wrapper">
			<div className="item-list">
				{currentItems.map((item) => {
					const quantity = inventory.filter(
						(invItem) => invItem.id === item.id,
					).length;

					return (
						<ItemCard
							key={item.id}
							item={item}
							type={type}
							onSelect={onSelect}
							quantity={quantity}
						/>
					);
				})}
			</div>
			<div className="page-buttons">
				<button
					type="button"
					className="left-arrow"
					onClick={() => setPage(page - 1)}
					disabled={page === 0}
				>
					<img src="/images/nav/left.png" alt="flèche gauche" />
				</button>
				<button
					type="button"
					className="right-arrow"
					onClick={() => setPage(page + 1)}
					disabled={page + 1 >= totalPages}
				>
					<img src="/images/nav/right.png" alt="flèche droite" />
				</button>
			</div>
		</section>
	);
}
