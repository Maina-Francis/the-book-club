import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  // hamburger active state
  const [active, setActive] = useState("nav_menu");

  // toggleIcon state ="hamburger"
  const [toggleIcon, setToggleIcon] = useState("hamburger");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // ToggleIcon
    toggleIcon === "hamburger"
      ? setToggleIcon("hamburger toggle")
      : setToggleIcon("hamburger");
  };

  return (
    <nav className="nav">
      <a href="#" className="logo">
        The Book Club
      </a>

      {/* Navbar menu  */}
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Library
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Reading
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Wishlist
          </a>
        </li>
      </ul>

      {/* Hamburger Icon  */}
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
