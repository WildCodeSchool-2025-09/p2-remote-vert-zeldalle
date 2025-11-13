import "./IngredientCard.css";

interface IngredientCardProps {
	ingredient: {
		id: number;
		name: string;
		image: string;
	};
}

function IngredientCard({ ingredient }: IngredientCardProps) {
	return (
		<div className="ingredient-card">
			<img src={`/ingredientsImg/${ingredient.image}`} alt={ingredient.name} />
		</div>
	);
}

export default IngredientCard;
