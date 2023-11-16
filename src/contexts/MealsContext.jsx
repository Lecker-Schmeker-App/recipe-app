import { createContext, useEffect, useState } from "react";
export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <MealsContext.Provider
      value={{ meals, setMeals, searchTerm, setSearchTerm }}
    >
      {children}
    </MealsContext.Provider>
  );
};
