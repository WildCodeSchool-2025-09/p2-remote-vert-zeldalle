import { type ReactNode, createContext, useContext, useState } from "react";
import type { InventoryItemProps } from "../type";

type InventoryContextType = {
	inventory: InventoryItemProps[];
	addIngredient: (item: InventoryItemProps) => void;
	removeIngredient: (id: number) => void;
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
	const removeIngredient = (id: number) => {
		setInventory((prev) => {
			const index = prev.findIndex((item) => item.id === id);
			if (index === -1) return prev;

			const updated = [...prev];
			updated.splice(index, 1);

			return updated;
		});
	};
	const addIngredient = (item: InventoryItemProps) => {
		setInventory((prev) => [...prev, item]);
	};
	return (
		<InventoryContext.Provider
			value={{ inventory, addIngredient, removeIngredient }}
		>
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