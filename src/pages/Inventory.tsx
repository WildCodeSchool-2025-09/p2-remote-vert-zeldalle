import { useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import ItemCard from "../components/items/ItemCard";
import { useInventory } from "../contexts/InventoryContext";
import "./Inventory.css";

function Inventory() {
	const { inventory } = useInventory();
	const [selectedItem, setSelectedItem] = useState(inventory[0]);

	const handleSelect = (item) => {
		setSelectedItem(item);
	};
	const groupedInventory = Object.values(
		inventory.reduce((acc, item) => {
			if (!acc[item.id]) {
				acc[item.id] = { ...item, quantity: 0 };
			}
			acc[item.id].quantity += 1;
			return acc;
		}, {}),
	);
	return (
		<div className="Inventory-page">
			<div className="inventory-grid">
				{groupedInventory.map((item) => (
					<ItemCard
						key={item.id}
						item={item}
						type="ingredient"
						quantity={item.quantity}
						onSelect={() => handleSelect(item)}
					/>
				))}
			</div>
			<DetailIngredient ingredient={selectedItem} />
		</div>
	);
}

export default Inventory;
