import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import "../styles/Accueil.scss";
// import '../styles/pages/interactivites';
import '../styles/styles.scss';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';


function Accueil() {
  return (
    <section className="Accueil">
      <motion.article 
        className="AccPresentation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}>
        <h1>Bienvenue sur le projet MJR</h1>
        <p>Bienvenue sur le site de mon projet de fin d'études.</p>
      </motion.article>

      <motion.article 
        className="AccCreaLog"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <section className="Crea">
          <Link to="/GalerieC">
            <div className="RoueCrea"><LocalLibraryIcon fontSize="large"/></div>
          </Link>
          <h2><Link to="/GalerieC">Aspect Créatif</Link></h2>
        </section>
        <section className="Log">
          <h2><Link to="/DocuProg">Aspect Logique</Link></h2>
          <Link to="/DocuProg">
            <div className="RoueLog"><CodeIcon fontSize="large"/></div>
          </Link>
        </section>
      </motion.article>

      <motion.article 
        className="AccinfoVrac"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>
        <h2><Link to="/Documentation">Infos sommaires</Link></h2>
        <section>
          <div>
            <h6>11 logiciels</h6>
            <p>VS Code / GitHub / Houdini / Xd / Photoshop / Adobe Express / After Effects / Premiere Pro / Media Encoder / Copilot / Handbrake</p>
          </div>
          <div>
            <h6>6 semaines de conception</h6>
            <p>8 rencontres / 4 sprints / 3 TPs de concept / 1 présentation</p>
          </div>
          <div>
            <h6>3 / 6 cartes VFX</h6>
            <p>3 VFX via Houdini / 3 via After Effects + Premiere Pro</p>
          </div>
        </section>
      </motion.article>
      

    </section>
  );
}

export default Accueil;