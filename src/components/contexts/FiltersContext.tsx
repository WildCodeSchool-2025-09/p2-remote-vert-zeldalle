import { createContext, useContext } from "react";
import type { FilterKey, TypeKey } from "../../type";

type FiltersContextType = {
	hearts: number;
	filters: Record<FilterKey, boolean>;
	types: Record<TypeKey, boolean>;
	setHearts: (value: number) => void;
	setFilters: (filters: Record<FilterKey, boolean>) => void;
	setTypes: (types: Record<TypeKey, boolean>) => void;
};

export const FiltersContext = createContext<FiltersContextType | null>(null);

export const useFilters = () => {
	const ctx = useContext(FiltersContext);
	if (!ctx)
		throw new Error("useFilters must be use inside FiltersContext.provider");
	return ctx;
};
