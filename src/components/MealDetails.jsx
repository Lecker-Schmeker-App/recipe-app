import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MealsContext } from "../contexts/MealsContext";

export const MealDetails = () => {
  const { id } = useParams();
  const { meals } = useContext(MealsContext);

  const currentMeal = meals.meals.find((meal) => meal.idMeal === id);
  return <div>{currentMeal.strMeal}</div>;
};
