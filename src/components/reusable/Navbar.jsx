import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";
import { Meals } from "../Meals";
import { Home } from "../Home";

function Navbar() {
  return (
    <nav className=" flex bg-white border-gray-200 dark:bg-gray-900">
      <Link to="/">
      <div className="w-32">
        <img
          src="./pictures/logo_transparent.png"
          alt="Lecker-Schmecker-Logo"
        />
      </div>
      </Link>

      <div className="text-slate-200 text-lg w-full">
        <div className="flex justify-center items-center h-20">
          <NavLink to="Meals">Meals</NavLink>
        </div>
        <div className="flex justify-center items-center h-12">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
