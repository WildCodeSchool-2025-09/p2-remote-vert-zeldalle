<<<<<<< HEAD:src/components/items/ItemList.tsx
import { useState } from "react";
import type { ItemListProps } from "../../type";
import ItemCard from "./ItemCard";
import "./ItemList.css";

function ItemList({ items, type }: ItemListProps) {
	const [page, setPage] = useState(0);
	const [totalItems, setTotalItems] = useState<{ [id: number]: number }>({});

	const itemsPerPage = 16;

	const incrementCount = (id: number) => {
		setTotalItems((prev) => ({
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
					<ItemCard
						key={item.id}
						item={item}
						type={type}
						count={totalItems[item.id] || 0}
						onIncrement={() => incrementCount(item.id)}
					/>
				))}
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

export default ItemList;
=======
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import type { Ingredient }  from "../../type";
import "./ItemList.css";

interface ItemListProps {
  type: "ingredient";
  onSelect: (ingredient: Ingredient) => void;
}

export default function ItemList({ type, onSelect }: ItemListProps) {
  const [items, setItems] = useState<Ingredient[]>([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 16;

  useEffect(() => {
    fetch(import.meta.env.VITE_API_INGREDIENTS)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const currentItems = items.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <section className="item-list-wrapper">
      <div className="item-list">
        {currentItems.map(item => (
        <button type="button" key={item.id} onClick={() => onSelect(item)} 
        style={{ cursor: "pointer", border: "none", background: "none", padding: 0 }}>
  <ItemCard item={item} type={type} />
</button>
))}

      </div>

      <div className="page-buttons">
        <button type="button" onClick={() => setPage(page - 1)} disabled={page === 0}>
          &lt;
        </button>
        <button type="button" onClick={() => setPage(page + 1)} disabled={page + 1 >= totalPages}>
          &gt;
        </button>
      </div>
    </section>
  );
}
>>>>>>> 81304e7232340803b6a960a1dc81c5084a318080:src/components/Items/ItemList.tsx
