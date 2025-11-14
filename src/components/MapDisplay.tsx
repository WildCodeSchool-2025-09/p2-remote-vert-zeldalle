interface MapDisplayProps {
	ingredient: Ingredient | null;
}

export default function MapDisplay({ ingredient }: MapDisplayProps) {
	if (!ingredient) return null;

	const ZOOM_WIDTH = 800;
	const ZOOM_HEIGHT = 600;

	const xOffset = (ingredient.x_pixel ?? 0) - ZOOM_WIDTH / 2;
	const yOffset = (ingredient.y_pixel ?? 0) - ZOOM_HEIGHT / 2;

	return (
		<div
			style={{
				position: "relative",
				width: ZOOM_WIDTH,
				height: ZOOM_HEIGHT,
				overflow: "hidden",
				border: "2px solid #333",
				marginTop: "20px",
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
