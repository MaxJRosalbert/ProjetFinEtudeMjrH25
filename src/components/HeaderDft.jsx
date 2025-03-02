import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/Logo MJR Clr.png';
import '../styles/styles.scss';

function HeaderDft() {
  return (
    <nav className="HeaderDft">
      <div className="Logo">
        <Link to="/Accueil"><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className="menu">
        <Link to="/Accueil" underline="none"><li>Accueil</li></Link>
        <Link to="/GalerieC" underline="none"><li>Galerie</li></Link>
        <Link to="/DocuProg" underline="none"><li>Aspect Prog</li></Link>
        <Link to="/Documentation" underline="none"><li>Documentation</li></Link>
        <Link to="/APropos" underline="none"><li>À Propos</li></Link>
      </ul>

    </nav>
  );
}

export default HeaderDft;
