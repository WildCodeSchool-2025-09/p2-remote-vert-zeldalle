import type { Ingredient } from "../type";

interface MapDisplayProps {
	ingredient: Ingredient;
}

const ZOOM_WIDTH = 750;
const ZOOM_HEIGHT = 500;

export default function MapDisplay({ ingredient }: MapDisplayProps) {
	const xOffset = (ingredient.x_pixel ?? 0) - ZOOM_WIDTH / 2;
	const yOffset = (ingredient.y_pixel ?? 0) - ZOOM_HEIGHT / 2;

	return (
		<div
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
					width: 3200,
					height: 2400,
					transition: "left 0.5s, top 0.5s",
				}}
			/>
		</div>
	);
}
