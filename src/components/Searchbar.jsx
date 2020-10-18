import React from "react";
import { DropdownCategories } from "./DropdownCategories";
import { SearchInput } from "./SearchInput";

export const Searchbar = () => {
  return (
    <div className="searchbar__container">
      <div className="searchbar__categories">
        <DropdownCategories />
      </div>
      <div className="searchbar__input">
        <SearchInput />
      </div>
      <div className="searchbar__phone"></div>
    </div>
  );
};
