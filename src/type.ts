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
}

export interface ItemCardProps {
	item: Ingredient | Recipe;
	type: "ingredient" | "recipe";
	count?: number;
	onIncrement?: () => void;
	onSelect?: (item: Ingredient | Recipe) => void;
	isSelected?: boolean;
}

export interface ItemListProps {
	items: (Ingredient | Recipe)[];
	type: "ingredient" | "recipe";
	onSelect?: (item: Ingredient | Recipe) => void;
}

export interface RecipeDetailProps {
	recipe: Recipe;
	onIngredientSelect: (ingredient: Ingredient) => void;
}

export type SelectedItem =
	| { type: "recipe"; item: Recipe }
	| { type: "ingredient"; item: Ingredient };
