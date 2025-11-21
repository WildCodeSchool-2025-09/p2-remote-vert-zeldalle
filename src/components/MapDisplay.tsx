import type { Ingredient } from "../type";
import DetailIngredient from "./DetailIngredient";

interface MapDisplayProps {
	ingredient: Ingredient;
}

const ZOOM_WIDTH = 400;
const ZOOM_HEIGHT = 500;
const MAP_WIDTH = 3200;
const MAP_HEIGHT = 2400;

export default function MapDisplay({ ingredient }: MapDisplayProps) {
	// Utilise x_pixel / y_pixel si elles existent, sinon calcule depuis coords
	const x =
		ingredient.x_pixel ?? ((ingredient.coords?.x ?? 0) / 100) * MAP_WIDTH;
	const y =
		ingredient.y_pixel ?? ((ingredient.coords?.y ?? 0) / 100) * MAP_HEIGHT;

	// Empêche de sortir des bords
	const xOffset = Math.min(
		Math.max(x - ZOOM_WIDTH / 2, 0),
		MAP_WIDTH - ZOOM_WIDTH,
	);
	const yOffset = Math.min(
		Math.max(y - ZOOM_HEIGHT / 2, 0),
		MAP_HEIGHT - ZOOM_HEIGHT,
	);

	return (
		
		<div className="Mapcard">
			<div
				className="Mapcard"
				style={{
					width: ZOOM_WIDTH,
					height: ZOOM_HEIGHT,
					overflow: "hidden",
					position: "relative",
				}}
			>
				<img
					src="/images/MapImage.png"
					alt="Carte d'Hyrule"
					style={{
						position: "absolute",
						left: -xOffset,
						top: -yOffset,
						width: MAP_WIDTH,
						height: MAP_HEIGHT,
					}}
				/>
			</div>
			<DetailIngredient ingredient={ingredient} />
		</div>
	);
}
