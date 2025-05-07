import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hamburgerMenu.scss";

const HamburgerMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`hamburger-btn${open ? " open" : ""}`}
        aria-label="Ouvrir le menu navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`hamburger-menu${open ? " show" : ""}`} aria-hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;