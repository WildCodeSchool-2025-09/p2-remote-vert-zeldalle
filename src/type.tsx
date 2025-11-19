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
	effects: string;
	hearts: number;
	found_in: string;
	coords: { x: number; y: number };
	image: string;
	effects_image: string;
	hearts_image: string;
}

export interface ItemCardProps {
	item: Ingredient | Recipe;
	type: "ingredient" | "recipe";
	count: number;
	onIncrement: () => void;
}

export interface ItemListProps {
	items: (Ingredient | Recipe)[];
	type: "ingredient" | "recipe";
}

export interface InventoryItemProps {
	id : number;
	name: string;
	image: string;
};