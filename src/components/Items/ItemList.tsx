import { useState } from "react";
import ItemCard from "./ItemCard";
import type { ItemListProps } from "../../type";
import "./ItemList.css"


function ItemList({ items, type }: ItemListProps) {
	const [page, setPage] = useState(0);
	const [counts, setCounts] = useState<{ [id: number]: number }>({});
    
	const itemsPerPage = 16;
    
	const incrementCount = (id: number) => {
		setCounts((prev) => ({
			...prev,
			[id]: (prev[id] || 0) + 1,
		}));
	};

	const startIndex = page * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
    
	const currentItems = items.slice(startIndex, endIndex);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	return (
		<section className="item-list-wrapper">
			<div className="item-list">
				{currentItems.map((item) => (
					<ItemCard key={item.id} item={item} type={type}
						count={counts[item.id] || 0}
						onIncrement={() => incrementCount(item.id)}
					/>
				))}
			</div>

			<div className="page-buttons">
				<button
					type="button"
					onClick={() => setPage(page - 1)}
					disabled={page === 0}
				>
					<img src="../../public/navImg/gauche.png" alt="flèche gauche" />
				</button>
				<button
					type="button"
					onClick={() => setPage(page + 1)}
					disabled={page + 1 >= totalPages}
				>
					<img src="../../public/navImg/droite.png" alt="flèche droite" />
				</button>
			</div>
		</section>
	);
}

export default ItemList;