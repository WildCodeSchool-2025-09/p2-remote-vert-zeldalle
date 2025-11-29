import { useState } from "react";
import Filters from "./components/Filters";
import "./reset.css";
import { Outlet } from "react-router";
import type { FilterKey, TypeKey } from "./type";
import "./App.css";
import { FiltersContext } from "./components/contexts/FiltersContext";

function App() {
	const [hearts, setHearts] = useState(0);
	const [types, setTypes] = useState<Partial<Record<TypeKey, boolean>>>({});
	const [filters, setFilters] = useState<Partial<Record<FilterKey, boolean>>>(
		{},
	);

	return (
		<FiltersContext.Provider
			value={{ hearts, filters, types, setHearts, setFilters, setTypes }}
		>
			<Filters
				HeartsChange={setHearts}
				EffectsChange={setFilters}
				TypesChange={setTypes}
			/>
			<Outlet />
		</FiltersContext.Provider>
	);
}

export default App;
