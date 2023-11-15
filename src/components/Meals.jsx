import { useContext, useEffect } from "react";
import { MealsContext } from "../contexts/MealsContext";
import image from "../img/backgroundMain.jpg";

export const Meals = () => {
  const { meals, setMeals, searchTerm } = useContext(MealsContext);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm
        );
        const data = await response.json();
        setMeals(data);
        console.log("data");
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, [searchTerm]);

  /*  console.log(meals.meals); */
  return (
    <main
      class="bg-cyan-900 flex flex-wrap justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {meals.meals &&
        meals.meals.map((meal, i) => (
          <section
            key={i}
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ml-8 mr-8 mt-8 mb-8 w-96"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={meal.strMealThumb}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal md:p-8">
              <h3 class="mb-6 text-l  text-gray-900 dark:text-white">
                &#x2694; {meal.strMeal}{" "}
              </h3>
              <ul>
                <li class="italic hover:text-blue-400 text-green-300">
                  🔸{meal.strCategory}
                </li>
                <li class="italic mt-1  hover:text-blue-400  text-green-700">
                  🔸{meal.strArea}
                </li>
              </ul>
            </div>
          </section>
        ))}
    </main>
  );
};
