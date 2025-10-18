import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ className, to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `bg-base-200 ${className}` : `${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
