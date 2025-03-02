import React from "react";
import { Link } from "react-router-dom";
// import "../styles/FooterStd.scss";
import '../styles/styles.scss';

function FooterStd() {
  return (
    <footer className="FooterStd">
      <ul className="BtnNav">
        <li><Link to="/Accueil">Accueil</Link></li>
        <li><Link to="/GalerieC">Galerie</Link></li>
        <li><Link to="/DocuProg">Aspect Prog</Link></li>
        <li><Link to="/Documentation">Documentation</Link></li>
        <li><Link to="/APropos">À Propos</Link></li>
      </ul>
      <section className="Mention">
        <h3>582-6N2 : Projet de fin d’études</h3>
        <p>&copy; {new Date().getFullYear()} @Max-J Rosalbert. Tous droits réservés.</p>
      </section>
   </footer>
  );
}

export default FooterStd;
