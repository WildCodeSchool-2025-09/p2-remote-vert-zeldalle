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