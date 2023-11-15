import { useContext, useEffect } from "react";
import { MealsContext } from "../contexts/MealsContext";

export const LoadMeals = () => {
  const { meals, setMeals, searchResult, showModal, setShowModal } =
    useContext(MealsContext);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchResult) return;
    fetchMeals(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`
    );
  }, [searchResult]);

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      {meals.meals &&
        meals.meals.map((meal, i) => (
          <article
            key={i}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ml-8 mr-8 mt-8 mb-8 w-96"
            onClick={() => openModalHandler(meal)}
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={meal.strMealThumb}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal md:p-8">
              <h3 className="mb-2 text-xl font-bold  text-gray-900 dark:text-white">
                {meal.strMeal}
              </h3>
            </div>
          </article>
        ))}
    </>
  );
};
