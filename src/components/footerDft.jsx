import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../styles/footerDft.scss";

import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import SubjectIcon from '@mui/icons-material/Subject';
import PersonIcon from '@mui/icons-material/Person';

function FooterDft() {
  const [toggleHeaderStd, setToggleHeaderStd] = useState(() => {
    return localStorage.getItem('toggleHeaderStd') === 'true';
  });

  useEffect(() => {
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
    applyToggle(toggleHeaderStd);
  }, [toggleHeaderStd]);

  const handleToggleHeaderStd = () => {
    const newState = !toggleHeaderStd;
    setToggleHeaderStd(newState);
    localStorage.setItem('toggleHeaderStd', newState);
    // Suppression du StorageEvent manuel, la synchro se fait via l'événement 'storage'
  };

  return (
    <nav className="footerDft">
      <ul className="BtnNav">
        <li><Link to="/Accueil"><HomeIcon fontSize="large" /></Link></li>
        <li><Link to="/GalerieC"><LocalLibraryIcon fontSize="large" /></Link></li>
        <li><Link to="/DocuProg"><CodeIcon fontSize="large" /></Link></li>
        <li><Link to="/Documentation"><SubjectIcon fontSize="large" /></Link></li>
        <li><Link to="/APropos"><PersonIcon fontSize="large" /></Link></li>
        <li onClick={handleToggleHeaderStd} className="BtnSwitch" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleToggleHeaderStd(); }}>
          {toggleHeaderStd ? <FlipCameraAndroidIcon fontSize="large" color="primary" /> : <FlipCameraAndroidIcon fontSize="large" />}
        </li>
      </ul>
      <section className="Mention">
        <h3>582-6N2 : Projet de fin d’études</h3>
        <p>&copy; {new Date().getFullYear()} @Max-J Rosalbert. Tous droits réservés.</p>
      </section>

    </nav>
  );
}

export default FooterDft;
