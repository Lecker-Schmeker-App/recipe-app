import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MealsContext } from "../contexts/MealsContext";

export const MealDetails = () => {
  const { id } = useParams();
  const { meals } = useContext(MealsContext);

  const currentMeal = meals.meals.find((meal) => meal.idMeal === id);

  return (
    <article className="cover">
      <div className="modal-container">
        <img src={currentMeal.strMealThumb} className="img-modal" />
      </div>
      <div className="">
        <h4>{currentMeal.strMeal} </h4>
        <p>Cooking Instructions</p>
        <p>{currentMeal.strInstructions} </p>
        <a
          href={currentMeal.strSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Source
        </a>
      </div>
    </article>
  );
};
