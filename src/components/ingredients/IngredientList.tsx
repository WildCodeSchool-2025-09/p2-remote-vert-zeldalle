import { useEffect, useState } from "react";
import IngredientCard from "./IngredientCard";
import "./IngredientList.css";
import App from "../App";

interface Ingredients {
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

function IngredientList({onSelect}: { onSelect: (ingredient: Ingredients) => void}) {
	const [ingredients, setIngredients] = useState<Ingredients[]>([]);
	const [page, setPage] = useState(0);
	const ingredientsPerPage = 16;
	const INGREDIENTS_API = import.meta.env.VITE_API_INGREDIENTS;
	const [counts, setCounts] = useState<{ [id: number]: number }>({});
	const incrementCount = (id: number) => {setCounts((prev) => ({
			...prev,
			[id]: (prev[id] || 0) + 1,
		}));
	};


	useEffect(() => {
		fetch(INGREDIENTS_API)
			.then((response) => response.json())
			.then((data) => setIngredients(data));
	}, []);

	const startIndex = page * ingredientsPerPage;
	const endIndex = startIndex + ingredientsPerPage;
	const currentIngredients = ingredients.slice(startIndex, endIndex);
	const totalPages = Math.ceil(ingredients.length / ingredientsPerPage);

	return (
		<section className="ingredient-list-wrapper">
			<div className="ingredient-list">
				{currentIngredients.map((ingredient) => (
				<div key={ingredient.id} onClick={() => onSelect(ingredient)} style={{ cursor: 'pointer' }}>
					<IngredientCard 
						key={ingredient.id} 
						ingredient={ingredient} 
						count={counts[ingredient.id] || 0} 
						onIncrement={() => incrementCount(ingredient.id)}
						/>
				</div>

				))}
			</div>

			<div className="page-buttons">
				<button
					type="button"
					onClick={() => setPage(page - 1)}
					disabled={page === 0}
				>
					<img src="../../public/navImg/gauche.png" alt="flèche gauche" />
				</button>
				<button
					type="button"
					onClick={() => setPage(page + 1)}
					disabled={page + 1 >= totalPages}
				>
					<img src="../../public/navImg/droite.png" alt="flèche droite" />
				</button>
			</div>
		</section>
	);
}

export default IngredientList;
