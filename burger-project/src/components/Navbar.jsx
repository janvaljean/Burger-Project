import React from "react";
import BurgerLogo from "../assets/burgerlogo.png"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
