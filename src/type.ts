export interface Recipe {
	id: number;
	name: string;
	description: string;
	duration: string;
	hearts: number;
	ingredient_ids: number[];
	effect: string;
	image: string;
	effect_image: string;
	heart_image: string;
	ingredients?: Ingredient[];
}

export interface Ingredient {
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
}

export interface ItemCardProps {
	item: Ingredient | Recipe;
	type: "ingredient" | "recipe";
	count: number;
	onIncrement: () => void;
	onSelect?: (selection: SelectedItem) => void;
}

export interface ItemListProps {
	items: (Ingredient | Recipe)[];
	type: "ingredient" | "recipe";
	onSelect?: React.Dispatch<React.SetStateAction<SelectedItem | null>>;
}

export interface RecipeDetailProps {
	recipe: Recipe;
}

export type SelectedItem =
	| { type: "recipe"; item: Recipe }
	| { type: "ingredient"; item: Ingredient };

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

export const effectMap: Record<FilterKey, string[]> = {
	cold: ["Résistance au froid"],
	stamina: ["Augmente l'endurance"],
	heat: ["Résistance à la chaleur"],
	mighty: ["Augmente l'attaque"],
	sneaky: ["Augmente la furtivité"],
	climbing: ["Augmente la vitesse d'escalade"],
};

export const typeMap: Record<TypeKey, string[]> = {
	meats: ["Viande"],
	fruitsvegetables: ["Fruits/Légumes"],
	minerals: ["Minéraux"],
	insects: ["Insectes"],
	fishs: ["Poissons"],
	monsters: ["Monstres"],
};

export type Suggestion = {
	name: string;
	kind: "ingredient" | "recette";
};
