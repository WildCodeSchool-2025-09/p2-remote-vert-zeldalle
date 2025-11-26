import { useInventory } from "../contexts/InventoryContext";

export default function Inventory() {
	const { inventory } = useInventory();

	return (
		<div className="inventory-list">
			{inventory.map((item) => (
				<div key={item.id} className="inventory-item">
					<img src={`/images/ingredients/${item.image}`} alt={item.name} />
					<p>{item.quantity}</p>
				</div>
			))}
		</div>
	);
}
