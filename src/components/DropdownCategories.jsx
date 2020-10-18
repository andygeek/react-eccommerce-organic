import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

export const DropdownCategories = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ddcategories__container">
      <div
        className="ddcategories__title"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="ddcategories__menu-icon">
          <MenuIcon />
        </span>
        <h3 className="ddcategories__title">All department</h3>
        <span className="ddcategories__arrow-icon">
          <ArrowIcon />
        </span>
      </div>
      <div className="ddcategories__toggler">
        <ul className={open ? "ddcategories__list active" : "ddcategories__list" }>
          <li className="ddcategories__item">Fresh Meat</li>
          <li className="ddcategories__item">Fruit & Nut Gifts</li>
          <li className="ddcategories__item">Vegetables</li>
          <li className="ddcategories__item">Ocean Foods</li>
          <li className="ddcategories__item">Fastfood</li>
          <li className="ddcategories__item">Fresh Bananas</li>
        </ul>
      </div>
    </div>
  );
};
