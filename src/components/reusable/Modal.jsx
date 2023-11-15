import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";

export const Modal = () => {
  const { setMeals, meals, showModal, setShowModal } = useContext(MealsContext);

  const closeButton = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="modal-cover">
      <div className="modal-container">
        <img src={meals.strMealThumb} className="img-modal" />
      </div>
      <div className="">
        <h4>{meals.strMeal} </h4>
        <p>Cooking Instructions</p>
        <p>{meals.strInstructions} </p>
        <a href={meals.strSource} target="_blank" rel="noopener noreferrer">
          Original Source
        </a>
        <button className="" onClick={closeButton}>
          Close
        </button>
      </div>
    </section>
  );
};
