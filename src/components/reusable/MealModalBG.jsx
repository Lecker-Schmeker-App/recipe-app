import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";

export const MealModalBG = () => {
  const { showModal, setShowModal } = useContext(MealsContext);

  return (
    <div className="mealModalbg" onClick={() => setShowModal(!showModal)}></div>
  );
};
