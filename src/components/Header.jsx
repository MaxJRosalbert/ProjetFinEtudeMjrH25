import React from "react";
import { Link } from "react-router-dom";
// import "../styles/HeaderStd.scss";
import '../styles/styles.scss';

function Header() {
  return (
    <header className="HeaderStd">
      <div className="logo">
        <Link to="/Accueil"><img src="/assets/images/logo.png" alt="Logo"/></Link>
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
