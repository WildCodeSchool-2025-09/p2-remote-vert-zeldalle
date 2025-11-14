export interface IngredientType {
  id: number;
  name: string;
  description: string;
  category: string;
  effect: string;
  hearts: number;
  found_in: string;
  image: string;

  coords: {
    x: number;
    y: number;
  };

  x_pixel?: number;
  y_pixel?: number;
}