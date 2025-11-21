import { useState } from "react";
import IngredientTest from "../IngredientTest";

function SearchBar({ ingredients }) {
	const [search, setSearch] = useState("");

	function handleSearch(event) {
		setSearch(event.target.value);
	}

	const filteredIngredients = ingredients.filter((ingredient) =>
		ingredient.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className="Search-bar">
			<input
				type="text"
				placeholder="Rechercher"
				onChange={handleSearch}
				value={search}
			/>

			{filteredIngredients.map((ingredient) => (
				<IngredientTest key={ingredient.id} name={ingredient.name} />
			))}
		</div>
	);
}

export default SearchBar;
