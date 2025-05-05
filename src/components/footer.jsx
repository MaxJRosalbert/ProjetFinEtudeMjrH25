import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import SubjectIcon from '@mui/icons-material/Subject';
import PersonIcon from '@mui/icons-material/Person';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
// import "../styles/FooterStd.scss";
// import '../styles/styles.scss';

function FooterStd() {
  // Correction : initialisation correcte de l'état à partir du localStorage
  const [toggleHeaderStd, setToggleHeaderStd] = useState(() => {
    const stored = localStorage.getItem('toggleHeaderStd');
    return stored ? stored === 'true' : false;
  });

  // Correction : factorisation de la fonction applyToggle
  const applyToggle = (state) => {
    const headerStd = document.querySelector('.HeaderStd');
    const headerDft = document.querySelector('.HeaderDft');
    const footerDft = document.querySelector('.footerDft');
    const footerStd = document.querySelector('.FooterStd');
    if (headerStd) headerStd.classList.toggle('ActiveHeaderStd', state);
    if (headerDft) headerDft.classList.toggle('ModeHeaderDft', state);
    if (footerDft) footerDft.classList.toggle('DesActiveFooterDefaut', state);
    if (footerStd) footerStd.classList.toggle('ActiveFooterSdt', state);
  };

  useEffect(() => {
    applyToggle(toggleHeaderStd);
    const onStorage = (e) => {
      if (e.key === 'toggleHeaderStd') {
        const newState = e.newValue === 'true';
        setToggleHeaderStd(newState);
        applyToggle(newState);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    applyToggle(toggleHeaderStd);
    // eslint-disable-next-line
  }, [toggleHeaderStd]);

  const handleToggleHeaderStd = () => {
    const newState = !toggleHeaderStd;
    setToggleHeaderStd(newState);
    localStorage.setItem('toggleHeaderStd', newState);
  };

  return (
    <footer className="FooterStd">
      <ul className="BtnNav">
        <li><Link to="/Accueil" aria-label="Accueil"><HomeIcon fontSize="large" /></Link></li>
        <li><Link to="/GalerieC" aria-label="Galerie"><LocalLibraryIcon fontSize="large" /></Link></li>
        <li><Link to="/DocuProg" aria-label="Documentation programmation"><CodeIcon fontSize="large" /></Link></li>
        <li><Link to="/Documentation" aria-label="Documentation"><SubjectIcon fontSize="large" /></Link></li>
        <li><Link to="/APropos" aria-label="À propos"><PersonIcon fontSize="large" /></Link></li>
        <li onClick={handleToggleHeaderStd} className="BtnSwitch" aria-label="Changer l'affichage du header/footer" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleToggleHeaderStd(); }}>
          {toggleHeaderStd ? <FlipCameraAndroidIcon fontSize="large" color="primary" /> : <FlipCameraAndroidIcon fontSize="large" />}
        </li>
      </ul>
      <section className="Mention">
        <h3>582-6N2 : Projet de fin d’études</h3>
        <p>&copy; {new Date().getFullYear()} @Max-J Rosalbert. Tous droits réservés.</p>
      </section>
    </footer>
  );
}

export default FooterStd;
