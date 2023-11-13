// Importieren der benötigten Hooks von React
import { useState, useEffect } from 'react';

// Definition der Search-Funktion, die als Komponente dient
function Search(props) {
  // Verwendung des useState-Hooks, um den Zustand der Suchanfrage und der Ergebnisse zu verwalten
  const [query, setQuery] = useState(props.searchTerm);
  const [results, setResults] = useState([]);

  // Verwendung des useEffect-Hooks, um die Suchanfrage auszuführen, wenn sich der Suchbegriff ändert
  useEffect(() => {
    // Überprüfung, ob ein Suchbegriff vorhanden ist
    if (query) {
      // Ausführung der Suchanfrage mit fetch
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        // Umwandlung der Antwort in JSON
        .then(response => response.json())
        // Aktualisierung des Zustands der Ergebnisse mit den erhaltenen Daten
        .then(data => setResults(data.meals));
    }
  }, [query]); // Abhängigkeiten des useEffect-Hooks

  // Rückgabe der Komponente, die die Suchergebnisse anzeigt
  return (
    <div>
      {/* Überprüfung, ob Ergebnisse vorhanden sind, und dann deren Darstellung */}
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

// Exportieren der Search-Komponente als Standardexport
export default Search;