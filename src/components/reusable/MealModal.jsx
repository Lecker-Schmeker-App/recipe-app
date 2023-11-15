import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";

export const MealModal = () => {
  const { showModal, setShowModal } = useContext(MealsContext);
  return (
    <div className="mealModal" onClick={() => setShowModal(!showModal)}></div>
  );
};
