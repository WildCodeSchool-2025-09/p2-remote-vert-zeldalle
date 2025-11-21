import { useState } from "react";
import "./TypeButtons.css";

type TypeKey =
	| "meats"
	| "fruitsvegetables"
	| "minerals"
	| "insects"
	| "fishs"
	| "monsters";

type TypeButtonsProps = {
	onTypesChange?: (types: Record<TypeKey, boolean>) => void;
};

function TypeButtons({ onTypesChange }: TypeButtonsProps) {
	const [, setFilters] = useState<Record<TypeKey, boolean>>({
		meats: false,
		fruitsvegetables: false,
		minerals: false,
		insects: false,
		fishs: false,
		monsters: false,
	});

	const toggleFilter = (key: TypeKey) => {
		setFilters((prev) => {
			const updated = { ...prev, [key]: !prev[key] };
			if (onTypesChange) onTypesChange(updated);
			return updated;
		});
	};

	return (
		<div className="Type-bar">
			<button type="button" onClick={() => toggleFilter("meats")}>
				<img src="/public/typeimg/meats.png" alt="Type meats" />
			</button>
			<button type="button" onClick={() => toggleFilter("fruitsvegetables")}>
				<img
					src="/public/typeimg/fruits.vegetables.png"
					alt="Type fruits/vege"
				/>
			</button>
			<button type="button" onClick={() => toggleFilter("minerals")}>
				<img src="/public/typeimg/minerals.png" alt="Type minerals" />
			</button>
			<button type="button" onClick={() => toggleFilter("insects")}>
				<img src="/public/typeimg/insects.png" alt="Type insects" />
			</button>
			<button type="button" onClick={() => toggleFilter("fishs")}>
				<img src="/public/typeimg/fishs.png" alt="Type fishs" />
			</button>
			<button type="button" onClick={() => toggleFilter("monsters")}>
				<img src="/public/typeimg/monsters.png" alt="Type monsters" />
			</button>
		</div>
	);
}

export default TypeButtons;
