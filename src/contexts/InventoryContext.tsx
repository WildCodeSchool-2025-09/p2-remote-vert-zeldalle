import { type ReactNode, createContext, useContext, useState } from "react";
import type { InventoryItemProps } from "../type";

type InventoryContextType = {
	inventory: InventoryItemProps[];
	addIngredient: (item: InventoryItemProps) => void;
};

const InventoryContext = createContext<InventoryContextType | undefined>(
	undefined,
);

export default function InventoryProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [inventory, setInventory] = useState<InventoryItemProps[]>([]);

	const addIngredient = (item: InventoryItemProps) => {
		setInventory((prev) => {
			if (prev.find((i) => i.id === item.id)) return prev;
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
	const context = useContext(InventoryContext);

	if (!context) {
		throw new Error("useInventory must be used inside <InventoryProvider>");
	}

	return context;
};
