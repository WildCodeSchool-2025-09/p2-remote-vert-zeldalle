import { useInventory } from "../contexts/InventoryContext";
import ItemCard from "../components/items/ItemCard";


const { inventory } = useInventory ();

function Inventory() {
	return (
		<div className="inventory-list">
			{inventory.map((item) => (
				<ItemCard
					key={item.id}
					item={item}
					type="ingredient"count={1} addOne={() => {}}
				/>
			))}
		</div>
	);
}

export default Inventory;
