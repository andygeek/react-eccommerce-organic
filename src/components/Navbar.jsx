import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src="./logo.png" alt=""/>
      </div>
      <div className="navbar__menu">
        Menú
      </div>
      <div className="navbar__shopping">
        Compras
      </div>
    </div>
  );
};
