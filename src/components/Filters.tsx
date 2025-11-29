import { useEffect, useState } from "react";
import "./Filter.css";
import { useNavigate } from "react-router-dom";
import type {
	FilterKey,
	Ingredient,
	Recipe,
	Suggestion,
	TypeKey,
} from "../type";

// ---------------------------------------- Filters -------------------------------------

type FiltersProps = {
	HeartsChange?: (value: number) => void;
	EffectsChange?: (filters: Record<FilterKey, boolean>) => void;
	TypesChange?: (types: Record<TypeKey, boolean>) => void;
};

function Filters({ HeartsChange, EffectsChange, TypesChange }: FiltersProps) {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [recettes, setRecettes] = useState<Recipe[]>([]);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

	// Charger les données depuis tes API
	useEffect(() => {
		fetch(import.meta.env.VITE_API_INGREDIENTS)
			.then((res) => res.json())
			.then((data) => setIngredients(data));

		fetch(import.meta.env.VITE_API_RECIPES)
			.then((res) => res.json())
			.then((data) => setRecettes(data));
	}, []);

	// Fonction de recherche/autocomplétion
	const handleSearch = (query: string) => {
		const q = query.toLowerCase();

		if (!q) {
			setSuggestions([]);
			return;
		}

		const foundIngredients: Suggestion[] = ingredients
			.filter((i) => i.name.toLowerCase().startsWith(q))
			.map((i) => ({ name: i.name, kind: "ingredient" }));

		const foundRecettes: Suggestion[] = recettes
			.filter((r) => r.name.toLowerCase().startsWith(q))
			.map((r) => ({ name: r.name, kind: "recette" }));

		setSuggestions([...foundIngredients, ...foundRecettes]);
	};
	return (
		<div className="filter-bar">
			<Heart HeartsChange={HeartsChange} />
			<Effects EffectsChange={EffectsChange} />
			<Type TypesChange={TypesChange} />
			<SearchBar onSearch={handleSearch} suggestions={suggestions} />
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

	const handleIncrement = () => {
		if (Hearts < max) {
			const newValue = Hearts + 0.25;
			setHearts(newValue);
			HeartsChange?.(newValue);
		}
	};

	const handleDecrement = () => {
		if (Hearts > 0) {
			const newValue = Hearts - 0.25;
			setHearts(newValue);
			HeartsChange?.(newValue);
		}
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
		<div className="heart-section">
			<div className="heart-controls">
				<button type="button" onClick={handleDecrement}>
					-
				</button>
				<button type="button" onClick={handleIncrement}>
					+
				</button>
			</div>

			<div className="heart-bar">
				{hearts.map((heart, index) => (
					<div key={heart.id} className="heart-slot">
						{fractions.map((fraction) => (
							<div
								key={`${heart.id}-fraction-${fraction}`}
								role="button"
								tabIndex={0}
								className={`heart-click-zone zone-${fraction * 100}`}
								onClick={() => handleClick(index, fraction)}
								onKeyDown={(e) => {
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
				<img src="/public/images/effects/mighty.png" alt="Mighty Buff" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("sneaky")}
				className={effectState.sneaky ? "active" : ""}
			>
				<img src="/public/images/effects/sneaky.png" alt="Sneaky Buff" />
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
	const [typeState, setFilters] = useState<Record<TypeKey, boolean>>({
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
			<button
				type="button"
				onClick={() => toggleFilter("meats")}
				className={typeState.meats ? "active" : ""}
			>
				<img src="/images/type/meats.png" alt="Type meats" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("fruitsvegetables")}
				className={typeState.fruitsvegetables ? "active" : ""}
			>
				<img src="/images/type/fruits.vegetables.png" alt="Type fruits/vege" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("minerals")}
				className={typeState.minerals ? "active" : ""}
			>
				<img src="/images/type/minerals.png" alt="Type minerals" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("insects")}
				className={typeState.insects ? "active" : ""}
			>
				<img src="/images/type/insects.png" alt="Type insects" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("fishs")}
				className={typeState.fishs ? "active" : ""}
			>
				<img src="/images/type/fishs.png" alt="Type fishs" />
			</button>
			<button
				type="button"
				onClick={() => toggleFilter("monsters")}
				className={typeState.monsters ? "active" : ""}
			>
				<img src="/images/type/monsters.png" alt="Type monsters" />
			</button>
		</div>
	);
}

// ---------------------------------------- Searchbar -------------------------------------

type SearchProps = {
	onSearch?: (query: string) => void;
	suggestions?: Suggestion[];
};

export function SearchBar({ onSearch, suggestions = [] }: SearchProps) {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		onSearch?.(value);
	};

	const handleSelect = (s: Suggestion) => {
		setQuery(s.name);
		onSearch?.(s.name);

		if (s.kind === "recette") {
			navigate(`/recette/${s.name}`);
		} else {
			navigate(`/ingredient/${s.name}`);
		}
	};

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Recherche"
				value={query}
				onChange={handleChange}
			/>

			{suggestions.length > 0 && (
				<ul className="suggestions">
					{suggestions.map((s) => (
						<li key={s.name}>
							<button type="button" onClick={() => handleSelect(s)}>
								{s.name} <span className="kind">({s.kind})</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
