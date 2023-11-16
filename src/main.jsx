import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Meals } from "./components/Meals.jsx";
import { MealsProvider } from "./contexts/MealsContext.jsx";
import { MealDetails } from "./components/MealDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Meals",
        element: <Meals />,
      },
      {
        path: ":id",
        element: <MealDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MealsProvider>
      <RouterProvider router={router} />
    </MealsProvider>
  </React.StrictMode>
);
