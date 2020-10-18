import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src="./logo.png" alt="" />
      </div>
      <div className="navbar__menu">
        <Link>HOME</Link>
        <Link>SHOP</Link>
        <Link>PAGES</Link>
        <Link>BLOG</Link>
        <Link>CONTACT</Link>
      </div>
      <div className="navbar__shopping">Compras</div>
    </div>
  );
};
