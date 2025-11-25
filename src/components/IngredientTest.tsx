import { useEffect, useState } from "react";

type FilterKey = "cold" | "stamina" | "heat" | "mighty" | "sneaky" | "climbing";
type TypeKey =
	| "meats"
	| "fruitsvegetables"
	| "minerals"
	| "insects"
	| "fishs"
	| "monsters";

interface IngredientTestProps {
	hearts: number;
	filters: Record<FilterKey, boolean>;
	type: Record<TypeKey, boolean>;
	onDataLoaded?: (ingredients: Ingredient[]) => void;
}

type Ingredient = {
	id: number;
	name: string;
	description: string;
	category: string;
	effect: string;
	hearts: number;
	found_in: string;
	coords: { x: number; y: number };
	image: string;
	effect_image: string;
	hearts_image: string;
};

function IngredientTest({
	hearts,
	filters,
	type,
	onDataLoaded,
}: IngredientTestProps) {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/WildCodeSchool-2025-09/JS-remote-vert-p2-api-ingredients-zelda-cookbook/ingredients",
		)
			.then((response) => response.json())
			.then((data) => {
				setIngredients(data);
				onDataLoaded?.(data);
			})
			.catch((error) => console.error("Erreur:", error));
	}, [onDataLoaded]);

	const effectMap: Record<FilterKey, string[]> = {
		cold: ["Résistance au froid"],
		stamina: ["Augmente l'endurance"],
		heat: ["Résistance à la chaleur"],
		mighty: ["Augmente l'attaque"],
		sneaky: ["Augmente la furtivité"],
		climbing: ["Augmente la vitesse d'escalade"],
	};

	const typeMap: Record<TypeKey, string[]> = {
		meats: ["Viande"],
		fruitsvegetables: ["Fruits/Légumes"],
		minerals: ["Minéraux"],
		insects: ["Insectes"],
		fishs: ["Poissons"],
		monsters: ["Monstres"],
	};

	const activeFilters = (Object.keys(filters) as FilterKey[]).filter(
		(key) => filters[key],
	);

	const activeTypes = (Object.keys(type) as TypeKey[]).filter(
		(key) => type[key],
	);

	const filteredIngredients = ingredients.filter((ingredient) => {
		if (hearts > 0 && ingredient.hearts > hearts) return false;

		if (
			activeTypes.length > 0 &&
			!activeTypes.some((key) =>
				typeMap[key].some(
					(val) =>
						val.toLowerCase().trim() ===
						ingredient.category.toLowerCase().trim(),
				),
			)
		) {
			return false;
		}

		if (
			activeFilters.length > 0 &&
			!activeFilters.some((key) =>
				effectMap[key].some(
					(val) =>
						val.toLowerCase().trim() === ingredient.effect.toLowerCase().trim(),
				),
			)
		) {
			return false;
		}

		return true;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Nom</th>
					<th>Coeurs</th>
					<th>Effet</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{filteredIngredients.map((ingredient) => (
					<tr key={ingredient.id}>
						<td>{ingredient.name}</td>
						<td>{ingredient.hearts}</td>
						<td>{ingredient.effect || "—"}</td>
						<td>{ingredient.category}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default IngredientTest;
