import React from "react";
import { Link } from "react-router-dom";
// import "../styles/HeaderStd.scss";
import '../styles/styles.scss';

import Logo from "../assets/img/Logo MJR Clr.png";

function Header() {
  return (
    <header className="HeaderStd">
      <div className="logo">
        <Link to="/Accueil"><img src={Logo} alt="Logo"/></Link>
      </div>
      <ul className="menu">
        <li><Link to="/Accueil">Accueil</Link></li>
        <li><Link to="/GalerieC">Galerie</Link></li>
        <li><Link to="/DocuProg">Aspect Prog</Link></li>
        <li><Link to="/Documentation">Documentation</Link></li>
        <li><Link to="/APropos">À Propos</Link></li>
      </ul>
    </header>
  );
}

export default Header;
