import React from "react";
import "../navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="brand">
        The Book Club
      </a>

      {/* Navbar menu  */}
      <ul className="nav_menu">
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
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
