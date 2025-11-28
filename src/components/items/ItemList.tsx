import { useState } from "react";
import type { ItemListProps } from "../../type";
import "./ItemList.css";
import ItemCard from "./ItemCard";

export default function ItemList({ items, type, onSelect }: ItemListProps) {
	const [page, setPage] = useState(0);
	const itemsPerPage = 16;

	const currentItems = items.slice(
		page * itemsPerPage,
		(page + 1) * itemsPerPage,
	);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	const [selectedId, setSelectedId] = useState<number | null>(null);

	return (
		<section className="item-list-wrapper">
			<div className="item-list">
				{currentItems.map((item) => (
					<ItemCard
						key={item.id}
						item={item}
						type={type}
						onSelect={(item) => {
							setSelectedId(item.id);
							onSelect?.(item);
						}}
						isSelected={item.id === selectedId}
					/>
				))}

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
			</div>
		</section>
	);
}
