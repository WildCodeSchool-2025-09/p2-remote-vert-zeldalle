import { type ReactNode, createContext, useContext, useState } from"react";
import type { InventoryItemProps } from "../type";

type InventoryItem ={
    inventory: InventoryItemProps[];
    setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
}
const InventoryContext = createContext({inventory : [] as InventoryItemProps[], addIngredient: (item: InventoryItemProps) =>{},});

export default function InventoryProvider({ children }: { children: ReactNode}) {
    const [inventory, setInventory] = useState<InventoryItemProps[]>([]);
    const addIngredient = (item: InventoryItemProps) =>{}

        return (
            <InventoryContext.Provider value={{ inventory, addIngredient }}>
                {children}
            </InventoryContext.Provider>
        );
}

export const useInventory = () => {
    return useContext(InventoryContext);
}