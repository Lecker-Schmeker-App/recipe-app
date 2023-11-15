import { useContext, useEffect } from "react";
import { MealsContext } from "../contexts/MealsContext";
import { MealModal } from "./reusable/MealModal";
import { MealModalBG } from "./reusable/MealModalBG";
import { LoadMeals } from "./loadMael";

export const Meals = () => {
  const { meals, setMeals, searchResult, showModal, setShowModal } =
    useContext(MealsContext);

  const openModalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {}, [showModal]);

  return (
    <main className="bg-cyan-900 flex flex-wrap justify-center relative">
      {showModal && (
        <section className="modalContainer">
          <MealModal />
          <MealModalBG />
        </section>
      )}
      <section>
        <LoadMeals />
      </section>
    </main>
  );
};
