import { useState } from "react";
import IngredientTest from "./components/IngredientTest";
import Panel from "./components/searchpanel/Panel";
import "./reset.css";

type FilterKey = "cold" | "stamina" | "heat" | "mighty" | "sneaky" | "climbing";
type TypeKey =
	| "meats"
	| "fruitsvegetables"
	| "minerals"
	| "insects"
	| "fishs"
	| "monsters";

function App() {
	const [selectedHearts, setSelectedHearts] = useState(0);

	const [filters, setFilters] = useState<Record<FilterKey, boolean>>(
		{} as Record<FilterKey, boolean>,
	);

	const [types, setTypes] = useState<Record<TypeKey, boolean>>(
		{} as Record<TypeKey, boolean>,
	);

	return (
		<div className="App">
			<Panel
				onHeartsChange={setSelectedHearts}
				onFiltersChange={setFilters}
				onTypesChange={setTypes}
			/>

			<IngredientTest filters={filters} hearts={selectedHearts} type={types} />
		</div>
	);
}

export default App;
