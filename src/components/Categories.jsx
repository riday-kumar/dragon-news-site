import React, { use } from "react";
import { NavLink } from "react-router";
import MyLink from "./MyLink";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="flex flex-col mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={({ isActive }) =>
              `hover:bg-base-200  gap-5 mb-3 p-4 font-semibold ${
                isActive && "bg-base-200"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
