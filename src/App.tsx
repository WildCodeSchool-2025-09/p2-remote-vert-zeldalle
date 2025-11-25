import { useState } from "react";
import Filters from "./components/Filters";
import IngredientTest from "./components/IngredientTest";
import "./reset.css";
import type { Element, FilterKey, TypeKey } from "./components/Filters";

function App() {
	const [Hearts, setHearts] = useState(0);

	const [filters, setEffects] = useState<Record<FilterKey, boolean>>(
		{} as Record<FilterKey, boolean>,
	);

	const [types, setTypes] = useState<Record<TypeKey, boolean>>(
		{} as Record<TypeKey, boolean>,
	);
	const [elements, setElements] = useState<Element[]>([]);

	return (
		<div className="App">
			<Filters
				HeartsChange={setHearts}
				EffectsChange={setEffects}
				TypesChange={setTypes}
				elements={elements}
			/>

			<IngredientTest
				filters={filters}
				hearts={Hearts}
				type={types}
				onDataLoaded={setElements}
			/>
		</div>
	);
}

export default App;
