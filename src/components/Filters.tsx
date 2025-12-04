import { useState } from "react";
import "./Filter.css";
import { useFilters } from "../contexts/FiltersContext";

function Filters() {
	return (
		<div className="filter-bar">
			<Hearts />
			<Effects />
			<Categories />
			<Name />
		</div>
	);
}

function Hearts() {
	const { updateFilters } = useFilters();

	const [hearts, setHearts] = useState<number>(0);

	const updateHearts = (value: number) => {
		updateFilters({
			hearts: value ? Number(value) : 0,
		});

		setHearts(value);
	};

	const getHeartLevel = (i: number): JSX.Element => {
		const diff = hearts - i;
		if (diff >= 1) return <img src="/images/hearts/Fullheart.png" alt="full" />;
		if (diff >= 0.75)
			return <img src="/images/hearts/Threequarterheart.png" alt="3/4" />;
		if (diff >= 0.5)
			return <img src="/images/hearts/Halfheart.png" alt="half" />;
		if (diff >= 0.25)
			return <img src="/images/hearts/Onequarterheart.png" alt="quarter" />;
		return <img src="/images/hearts/Emptyheart.png" alt="empty" />;
	};

	const fractions = [0.25, 0.5, 0.75, 1];
	const heartsArray = Array.from({ length: 10 }, (_, i) => i);

	return (
		<div className="heart-section">
			<div className="heart-controls">
				<button
					type="button"
					onClick={() => {
						return hearts > 0 && updateHearts(hearts - 0.25);
					}}
				>
					-
				</button>
				<button
					type="button"
					onClick={() => {
						return hearts < 10 && updateHearts(hearts + 0.25);
					}}
				>
					+
				</button>
			</div>

			<div className="heart-bar">
				{heartsArray.map((i) => (
					<div key={i} className="heart-slot">
						{fractions.map((fraction) => (
							<div
								key={`${i}-${fraction}`}
								role="button"
								tabIndex={0}
								className={`heart-click-zone zone-${fraction * 100}`}
								onClick={() => updateHearts(i + fraction)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										updateHearts(i + fraction);
									}
								}}
							/>
						))}
						{getHeartLevel(i)}
					</div>
				))}
			</div>
		</div>
	);
}

// ---------------------------------------- Effects -------------------------------------

export function Effects() {
	const { updateFilters } = useFilters();
	const [effects, setEffects] = useState<string[]>([]);

	function toggleEffect(effect: string) {
		setEffects((prev) => {
			const exists = prev.includes(effect);

			if (exists) {
				return prev.filter((e) => e !== effect);
			}

			return [...prev, effect];
		});

		updateFilters({
			effects: effects,
		});
	}

	return (
		<div className="effect-bar">
			<button
				type="button"
				onClick={() => toggleEffect("Résistance au froid")}
				className={effects.includes("Résistance au froid") ? "active" : ""}
			>
				<img src="/images/effects/Cold resist.png" alt="Froid" />
			</button>

			<button
				type="button"
				onClick={() => toggleEffect("Augmente l'endurance")}
				className={effects.includes("Augmente l'endurance") ? "active" : ""}
			>
				<img src="/images/effects/Stamina.png" alt="Endurance" />
			</button>

			<button
				type="button"
				onClick={() => toggleEffect("Résistance à la chaleur")}
				className={effects.includes("Résistance à la chaleur") ? "active" : ""}
			>
				<img src="/images/effects/Heat resist.png" alt="Chaleur" />
			</button>

			<button
				type="button"
				onClick={() => toggleEffect("Augmente l'attaque")}
				className={effects.includes("Augmente l'attaque") ? "active" : ""}
			>
				<img src="/images/effects/mighty.png" alt="Force" />
			</button>

			<button
				type="button"
				onClick={() => toggleEffect("Augmente la furtivité")}
				className={effects.includes("Augmente la furtivité") ? "active" : ""}
			>
				<img src="/images/effects/sneaky.png" alt="Discretion" />
			</button>

			<button
				type="button"
				onClick={() => toggleEffect("Augmente la vitesse d'escalade")}
				className={
					effects.includes("Augmente la vitesse d'escalade") ? "active" : ""
				}
			>
				<img src="/images/effects/Climbing.png" alt="Escalade" />
			</button>
		</div>
	);
}

// ---------------------------------------- Types -------------------------------------

function Categories() {
	const { updateFilters } = useFilters();
	const [categories, setCategories] = useState<string[]>([]);

	function toggleCategory(category: string) {
		setCategories((prev) => {
			const exists = prev.includes(category);

			if (exists) {
				return prev.filter((e) => e !== category);
			}

			return [...prev, category];
		});

		updateFilters({
			categories: categories,
		});
	}

	return (
		<div className="type-bar">
			<button
				type="button"
				onClick={() => toggleCategory("Viande")}
				className={categories.includes("Viande") ? "active" : ""}
			>
				<img src="/images/type/meats.png" alt="Viandes" />
			</button>

			<button
				type="button"
				onClick={() => toggleCategory("Fruits/Légumes")}
				className={categories.includes("Fruits/Légumes") ? "active" : ""}
			>
				<img src="/images/type/fruits.vegetables.png" alt="Fruits/légumes" />
			</button>

			<button
				type="button"
				onClick={() => toggleCategory("Minéraux")}
				className={categories.includes("Minéraux") ? "active" : ""}
			>
				<img src="/images/type/minerals.png" alt="Mineraux" />
			</button>

			<button
				type="button"
				onClick={() => toggleCategory("Insectes")}
				className={categories.includes("Insectes") ? "active" : ""}
			>
				<img src="/images/type/insects.png" alt="Insects" />
			</button>

			<button
				type="button"
				onClick={() => toggleCategory("Poissons")}
				className={categories.includes("Poissons") ? "active" : ""}
			>
				<img src="/images/type/fishs.png" alt="Poissons" />
			</button>

			<button
				type="button"
				onClick={() => toggleCategory("Monstres")}
				className={categories.includes("Monstres") ? "active" : ""}
			>
				<img src="/images/type/monsters.png" alt="Monstres" />
			</button>
		</div>
	);
}

// ---------------------------------------- Searchbar -------------------------------------

function Name() {
	const { updateFilters } = useFilters();
	const [name, setName] = useState<string>("");

	const updateName = (value: string) => {
		updateFilters({
			name: value,
		});

		setName(value);
	};

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Recherche"
				value={name}
				onChange={(e) => {
					updateName(e.target.value);
				}}
			/>
		</div>
	);
}

export default Filters;
