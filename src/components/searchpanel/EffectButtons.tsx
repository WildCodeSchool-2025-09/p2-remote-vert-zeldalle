import { useState } from "react";
import "./EffectButtons.css";

type FilterKey = "cold" | "stamina" | "heat" | "mighty" | "sneaky" | "climbing";

type EffectButtonsProps = {
	onFiltersChange?: (filters: Record<FilterKey, boolean>) => void;
};

function EffectButtons({ onFiltersChange }: EffectButtonsProps) {
	const [, setFilters] = useState<Record<FilterKey, boolean>>({
		cold: false,
		stamina: false,
		heat: false,
		mighty: false,
		sneaky: false,
		climbing: false,
	});

	const toggleFilter = (key: FilterKey) => {
		setFilters((prev) => {
			const updated = { ...prev, [key]: !prev[key] };
			if (onFiltersChange) onFiltersChange(updated);
			return updated;
		});
	};

	return (
		<div className="Effect-bar">
			<button type="button" onClick={() => toggleFilter("cold")}>
				<img src="/public/effectsimg/Cold resist.png" alt="Cold Resist" />
			</button>
			<button type="button" onClick={() => toggleFilter("stamina")}>
				<img src="/effectsimg/Stamina.png" alt="Stamina Buff" />
			</button>
			<button type="button" onClick={() => toggleFilter("heat")}>
				<img src="./effectsimg/Heat resist.png" alt="Heat Resist" />
			</button>
			<button type="button" onClick={() => toggleFilter("mighty")}>
				<img src="./effectsimg/Mighty.png" alt="Mighty Buff" />
			</button>
			<button type="button" onClick={() => toggleFilter("sneaky")}>
				<img src="./effectsimg/Sneaky.png" alt="Sneaky Buff" />
			</button>
			<button type="button" onClick={() => toggleFilter("climbing")}>
				<img src="./effectsimg/Climbing.png" alt="Climbing Buff" />
			</button>
		</div>
	);
}

export default EffectButtons;
