import React from "react";
import Squares from "../Header/Square";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="rectangle"></div>
      <span className="header__text">Blog name</span>
      <Squares />
    </header>
  );
};

export default Header;