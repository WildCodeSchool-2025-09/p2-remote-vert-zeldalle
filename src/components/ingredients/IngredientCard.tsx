import "./IngredientCard.css";

interface IngredientCardProps {
	ingredient: {
		id: number;
		name: string;
		image: string;
	};
	count: number;
	onIncrement: () => void;
}

function IngredientCard({
	ingredient,
	count,
	onIncrement,
}: IngredientCardProps) {
	return (
		<button
			className="ingredient-card"
			onClick={onIncrement}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					onIncrement();
				}
			}}
			type="button"
		>
			<img src={`/ingredientsImg/${ingredient.image}`} alt={ingredient.name} />
			<p>{count}</p>
		</button>
	);
}
export default IngredientCard;
