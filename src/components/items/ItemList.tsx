import { useRef, useState } from "react";
import type { ItemListProps } from "../../type";
import "./ItemList.css";
import ItemCard from "./ItemCard";

export default function ItemList({ items, type, onSelect }: ItemListProps) {
	const itemsPerPage = 12;
	const totalPages = Math.ceil(items.length / itemsPerPage);
	const pages = [];

	for (let i = 0; i < totalPages; i++) {
		const start = i * itemsPerPage;
		const end = (i + 1) * itemsPerPage;
		pages.push(items.slice(start, end));
	}

	const [page, setPage] = useState(0);
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		const contItemList = scrollRef.current;
		if (!contItemList) return;

		const scrollLeft = contItemList.scrollLeft;
		const width = contItemList.clientWidth;

		const newPage = Math.round(scrollLeft / width);
		if (newPage !== page) setPage(newPage);
	};

	const [selectedId, setSelectedId] = useState<number | null>(null);

	return (
		<section className="item-list-wrapper">
			<div className="item-list" ref={scrollRef} onScroll={handleScroll}>
				{pages.map((pageItems) => (
					<div className="item-page" key={pageItems[0].id}>
						{pageItems.map((item) => (
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
					</div>
				))}
			</div>
			<div className="pagination-dots">
				{pages.map((pageItems, i) => (
					<span
						key={pageItems[0].id}
						className={i === page ? "dot active" : "dot"}
					/>
				))}
			</div>
		</section>
	);
}
