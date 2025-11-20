import ItemCard from "../components/items/ItemCard";
import { useInventory } from "../contexts/InventoryContext";

function Inventory() {
	const { inventory } = useInventory();

	const handleSelect = () => {};

	return (
		<div className="inventory-list">
			{inventory.map((item) => (
				<ItemCard
					key={item.id}
					item={item}
					type="ingredient"
					onSelect={handleSelect}
				/>
			))}
		</div>
	);
}

export default Inventory;
