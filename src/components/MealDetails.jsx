import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MealsContext } from "../contexts/MealsContext";
import image from "../img/backgroundMain.jpg";

export const MealDetails = () => {
  const { id } = useParams();
  const { meals } = useContext(MealsContext);

  const currentMeal = meals.meals.find((meal) => meal.idMeal === id);

  return (
    <section className="" style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "repeat",
      backgroundSize: "contain",
    }} >
       <h1 className="flex text-2xl pt-10 text-green-100 justify-center">🔸{currentMeal.strMeal}🔸 </h1>
        <div className=" flex justify-center">
        <img src={currentMeal.strMealThumb} className="mt-10"/>
        </div>
      <div className="flex justify-center">
       
        <p className="mb-6 text-xl  w-1/3 mt-10 text-slate-300 ">{currentMeal.strInstructions} </p>
       {/*  <a
          href={currentMeal.strSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Source
        </a> */}
      </div>
    </section>
  );
};
