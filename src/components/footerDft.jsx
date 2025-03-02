import React from "react";
import { Link } from "react-router-dom";
// import "../styles/footerDft.scss";
import '../styles/styles.scss';

import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import SubjectIcon from '@mui/icons-material/Subject';
import PersonIcon from '@mui/icons-material/Person';

function FooterDft() {
  return (
    <nav className="footerDft">
      <ul className="BtnNav">
        <li><Link to="/Accueil"><HomeIcon  fontSize="large"/></Link></li>
        <li><Link to="/GalerieC"><LocalLibraryIcon  fontSize="large"/></Link></li>
        <li><Link to="/DocuProg"><CodeIcon  fontSize="large"/></Link></li>
        <li><Link to="/Documentation"><SubjectIcon  fontSize="large"/></Link></li>
        <li><Link to="/APropos"><PersonIcon  fontSize="large"/></Link></li>
      </ul>
      <section className="Mention">
        <h3>582-6N2 : Projet de fin d’études</h3>
        <p>&copy; {new Date().getFullYear()} @Max-J Rosalbert. Tous droits réservés.</p>
      </section>
    </nav>
  );
}

export default FooterDft;
