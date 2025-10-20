import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-button flex items-center gap-3">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt="user"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary px-10">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
