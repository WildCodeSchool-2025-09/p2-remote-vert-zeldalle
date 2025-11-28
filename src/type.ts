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
		count: number;
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
