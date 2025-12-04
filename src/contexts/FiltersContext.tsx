import { type ReactNode, createContext, useContext, useState } from "react";

type Filters = {
	hearts?: number;
	effects?: string[];
	categories?: string[];
	name?: string;
};

type UpdateFilters = (changes: Partial<Filters>) => void;

type FiltersContextType = {
	filters: Filters;
	updateFilters: UpdateFilters;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
	const [filters, setFilters] = useState<Filters>({});

	const updateFilters = (changes: Partial<Filters>) => {
		setFilters((prev) => ({
			...prev,
			...changes,
		}));
	};

	return (
		<FiltersContext.Provider value={{ filters, updateFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}

export const useFilters = () => {
	const ctx = useContext(FiltersContext);

	if (!ctx)
		throw new Error("useFilters must be use inside FiltersContext.provider");

	return ctx;
};
