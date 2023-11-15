import { useContext, useState } from "react";
import { MealsContext } from "../../contexts/MealsContext";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchResult } = useContext(MealsContext);

  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submittHandler = (event) => {
    event.preventDefault();
    if (searchInput) {
      setSearchResult(searchInput);
      setSearchInput("");
    }
  };
  return (
    <form className="flex items-center" onSubmit={submittHandler}>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Recipes"
          required
          value={searchInput}
          onChange={searchHandler}
        />
      </div>
      <button
        type="submit"
        className="flex items-center ms-2 text-sm w-20 h-10 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};
