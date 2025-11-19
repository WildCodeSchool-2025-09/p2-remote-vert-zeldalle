import { type ReactNode, createContext, useContext, useState } from "react";
import type { InventoryItemProps } from "../type";

type InventoryContextType = {
	inventory: InventoryItemProps[];
	addIngredient: (item: InventoryItemProps) => void;
};

const InventoryContext = createContext<InventoryContextType>({
	inventory: [],	addIngredient: () => {},
});

export default function InventoryProvider({ children }: { children: ReactNode }) {
	const [inventory, setInventory] = useState<InventoryItemProps[]>([]);

	const addIngredient = (item: InventoryItemProps) => {
		setInventory((prev) => { 
			if (prev.find((InventoryItemProps) => InventoryItemProps.id === item.id)) return prev;
			return [...prev, item];
		});
	};

	return (
		<InventoryContext.Provider value={{ inventory, addIngredient }}>
			{children}
		</InventoryContext.Provider>
	);
}

export const useInventory = () => {
	return useContext(InventoryContext);
};
