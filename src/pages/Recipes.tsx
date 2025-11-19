function Recipes() {
<<<<<<< HEAD
	return <></>;
=======
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const RECIPES_API = import.meta.env.VITE_API_RECIPES;

	useEffect(() => {
		fetch(RECIPES_API)
			.then((res) => res.json())
			.then((data: Recipe[]) => setRecipes(data))
			.catch(() => console.error("Erreur lors du chargement"));
	}, []);

	return <ItemList items={recipes} type="recipe" />;
>>>>>>> 81304e7232340803b6a960a1dc81c5084a318080
}

export default Recipes;
