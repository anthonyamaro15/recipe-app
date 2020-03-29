import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h2>recipe finder</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
