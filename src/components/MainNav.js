import { NavLink} from "react-router-dom";
import React from "react";
import ProtectedLink from "../auth/protected-link";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Profile
    </NavLink>
    {/* <NavLink
      // to="/"
      to="https://exchange-dashboard.netlify.app"
      // exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Admin
    </NavLink> */}
    {/* <a href="https://exchange-dashboard.netlify.app" className="nav-link">Admin</a> */}
    <ProtectedLink url="https://exchange-dashboard.netlify.app" name="Admin" />
  </div>
);

export default MainNav;