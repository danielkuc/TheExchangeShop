import React from "react";
import { NavLink } from "react-router-dom";
// import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <div className="container"> */}
          {/* <MainNav /> */}
          <NavLink
      to="/profile"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Profile
    </NavLink>
          <AuthNav />
        {/* </div> */}
      </nav>
    </div>
  );
};

export default NavBar;