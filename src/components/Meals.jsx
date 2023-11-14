import { useContext, useEffect } from "react";
import { MealsContext } from "../contexts/MealsContext";

export const Meals = () => {
  const { meals, setMeals } = useContext(MealsContext);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        setMeals(data);
        console.log("data",);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  console.log(meals.meals);
  return (
    <main>
      {meals.meals && meals.meals.map((meal,i) => (
        <div key={i} >
          <img src={meal.strMealThumb} alt="" />
          <h3>{meal.strMeal} </h3>
        </div>
      ))}
    </main>
  );
};