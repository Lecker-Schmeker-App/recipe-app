import { useState, useEffect } from 'react';

function Search(props) {
  const [query, setQuery] = useState(props.searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => setResults(data.meals));
    }
  }, [query]);

  return (
    <div>
      {results && results.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;