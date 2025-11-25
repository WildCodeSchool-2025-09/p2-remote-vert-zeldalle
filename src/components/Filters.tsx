import { useState } from "react";
import "./Filter.css";

// ---------------------------------------- Types -------------------------------------

export type TypeKey =
	| "meats"
	| "fruitsvegetables"
	| "minerals"
	| "insects"
	| "fishs"
	| "monsters";

export type FilterKey =
	| "cold"
	| "stamina"
	| "heat"
	| "mighty"
	| "sneaky"
	| "climbing";

type FiltersProps = {
	HeartsChange?: (value: number) => void;
	EffectsChange?: (filters: Record<FilterKey, boolean>) => void;
	TypesChange?: (types: Record<TypeKey, boolean>) => void;
};

function Filters({ HeartsChange, EffectsChange, TypesChange }: FiltersProps) {
	return (
		<div className="filter-bar">
			<Heart HeartsChange={HeartsChange} />
			<Effects EffectsChange={EffectsChange} />
			<Type TypesChange={TypesChange} />
		</div>
	);
}

export default Filters;

// ---------------------------------------- Hearts -------------------------------------

type HeartProps = {
	max?: number;
	HeartsChange?: (value: number) => void;
};

export function Heart({ max = 10, HeartsChange }: HeartProps) {
	const [Hearts, setHearts] = useState<number>(0);

	const handleClick = (index: number, fraction: number) => {
		const value = index + fraction;
		setHearts(value);
		HeartsChange?.(value);
	};

	const getHeartLevel = (i: number): JSX.Element => {
		const diff = Hearts - i;

		if (diff >= 1) return <img src="/images/hearts/Fullheart.png" alt="full" />;
		if (diff >= 0.75)
			return (
				<img src="/images/hearts/Threequarterheart.png" alt="three-quarters" />
			);
		if (diff >= 0.5)
			return <img src="/images/hearts/Halfheart.png" alt="half" />;
		if (diff >= 0.25)
			return <img src="/images/hearts/Onequarterheart.png" alt="quarter" />;
		return <img src="/images/hearts/Emptyheart.png" alt="empty" />;
	};

	const fractions: number[] = [0.25, 0.5, 0.75, 1];

	const hearts = Array.from({ length: max }, (_, i) => ({ id: `heart-${i}` }));

	return (
		<div className="heart-bar">
			{hearts.map((heart, index) => (
				<div key={heart.id} className="heart-wrapper">
					{fractions.map((fraction) => (
						<div
							key={`${heart.id}-fraction-${fraction}`}
							role="button"
							tabIndex={0}
							className={`heart-click-zone zone-${fraction * 100}`}
							onClick={() => handleClick(index, fraction)}
							onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClick(index, fraction);
								}
							}}
						/>
					))}
					{getHeartLevel(index)}
				</div>
			))}
		</div>
	);
}

// ---------------------------------------- Effects -------------------------------------

type EffectProps = {
	EffectsChange?: (filters: Record<FilterKey, boolean>) => void;
};

export function Effects({ EffectsChange }: EffectProps) {
	const [effectState, setEffectsState] = useState<Record<FilterKey, boolean>>({
		cold: false,
		stamina: false,
		heat: false,
		mighty: false,
		sneaky: false,
		climbing: false,
	});

	const toggleFilter = (key: FilterKey) => {
		setEffectsState((prev) => {
			const updated = { ...prev, [key]: !prev[key] };
			EffectsChange?.(updated);
			return updated;
		});
	};

	return (
		<div className="effect-bar">
			<button
				type="button"
				onClick={() => toggleFilter("cold")}
				className={effectState.cold ? "active" : ""}
			>
				<img src="/images/effects/Cold resist.png" alt="Cold Resist" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("stamina")}
				className={effectState.stamina ? "active" : ""}
			>
				<img src="/images/effects/Stamina.png" alt="Stamina Buff" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("heat")}
				className={effectState.heat ? "active" : ""}
			>
				<img src="/images/effects/Heat resist.png" alt="Heat Resist" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("mighty")}
				className={effectState.mighty ? "active" : ""}
			>
				<img src="/images/effects/Mighty.png" alt="Mighty Buff" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("sneaky")}
				className={effectState.sneaky ? "active" : ""}
			>
				<img src="/images/effects/Sneaky.png" alt="Sneaky Buff" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("climbing")}
				className={effectState.climbing ? "active" : ""}
			>
				<img src="/images/effects/Climbing.png" alt="Climbing Buff" />
			</button>
		</div>
	);
}

// ---------------------------------------- Types -------------------------------------

type TypeProps = {
	TypesChange?: (types: Record<TypeKey, boolean>) => void;
};

export function Type({ TypesChange }: TypeProps) {
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
			TypesChange?.(updated);
			return updated;
		});
	};

	return (
		<div className="type-bar">
			<button type="button" onClick={() => toggleFilter("meats")}>
				<img src="/images/type/meats.png" alt="Type meats" />
			</button>
			<button type="button" onClick={() => toggleFilter("fruitsvegetables")}>
				<img src="/images/type/fruits.vegetables.png" alt="Type fruits/vege" />
			</button>
			<button type="button" onClick={() => toggleFilter("minerals")}>
				<img src="/images/type/minerals.png" alt="Type minerals" />
			</button>
			<button type="button" onClick={() => toggleFilter("insects")}>
				<img src="/images/type/insects.png" alt="Type insects" />
			</button>
			<button type="button" onClick={() => toggleFilter("fishs")}>
				<img src="/images/type/fishs.png" alt="Type fishs" />
			</button>
			<button type="button" onClick={() => toggleFilter("monsters")}>
				<img src="/images/type/monsters.png" alt="Type monsters" />
			</button>
		</div>
	);
}
