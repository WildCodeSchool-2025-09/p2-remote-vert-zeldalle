import { useState } from "react";
import DetailIngredient from "../components/DetailIngredient";
import ItemCard from "../components/items/ItemCard";
import { useInventory } from "../contexts/InventoryContext";
import "./Inventory.css";

function Inventory() {
	const { inventory, addIngredient, removeIngredient } = useInventory();
	const [selectedItem, setSelectedItem] = useState(inventory[0])

	const handleSelect = (item ) => {
		setSelectedItem(item);


	};

	return (
		<div className="inventory-list">
			<div className="inventory-grid">
			{inventory.map((item) => (
				<ItemCard
					key={item.id}
					item={item}
					type="ingredient"
					onSelect={() => handleSelect(item)}
				/>
			))}
			</div>
			<DetailIngredient ingredient ={selectedItem}/>
		</div>
	);
}

export default Inventory;