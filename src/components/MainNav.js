import { NavLink} from "react-router-dom";
import React from "react";
import ProtectedLink from "../auth/protected-link";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink>
    <ProtectedLink url="https://exchange-dashboard.netlify.app" name="Admin" />
    <NavLink
      to="/cart"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Cart
    </NavLink>
  </div>
);

export default MainNav;