import React from "react";

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
    </nav>
  );
}

export default Navbar;
