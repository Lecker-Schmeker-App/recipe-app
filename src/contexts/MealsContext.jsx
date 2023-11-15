import { createContext, useEffect, useState } from "react";
export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
        searchResult,
        setSearchResult,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
