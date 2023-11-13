import { useContext, useEffect } from "react";
import { MealsContext } from "../contexts/MealsContext";

export const Meals = () => {
  const { meals, setMeals } = useContext(MealsContext);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=92e8e8973dd9428f8d8ea477bb3af553"
        );
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  console.log(meals);
  return (
    <main>
      {meals.results.map((meal) => (
        <>
          <img src={meal.image} alt="" />
          <h3>{meal.title} </h3>
        </>
      ))}
    </main>
  );
};
