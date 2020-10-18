import React from "react";

export const SearchInput = () => {
  return (
    <div className="searchinput__container">
      <input className="searchinput__input" type="text" autocomplete="off"/>
      <button className="searchinput__button">SEARCH</button>
    </div>
  );
};
