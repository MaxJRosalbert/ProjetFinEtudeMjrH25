import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import '../styles/styles.scss';

import Logo from "../assets/img/Logo MJR Clr.png";

function Header() {
    const [theme, setTheme] = useState('sombre');
    const [toggleHeaderStd, setToggleHeaderStd] = useState(() => {
      return localStorage.getItem('toggleHeaderStd') === 'true';
    });
  
    useEffect(() => {
      document.body.classList.remove('theme-clair', 'theme-sombre');
      document.body.classList.add(theme === 'clair' ? 'theme-clair' : 'theme-sombre');
    }, [theme]);
  
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

    const links = [
      { to: "/Accueil", label: "Accueil" },
      { to: "/GalerieC", label: "Galerie" },
      { to: "/Documentation", label: "Documentation" },
      { to: "/APropos", label: "À propos" },
      { to: "/DocuProg", label: "DocuProg" },
    ];

  return (
    <header className="HeaderStd">
      <div className="header-content">
        <div className="logo">
          <Link to="/Accueil"><img src={Logo} alt="Logo du site MJR" /></Link>
        </div>
        <nav className="desktop-nav">
          <ul className="menu">
            <li><Link to="/Accueil" aria-label="Accueil">Accueil</Link></li>
            <li><Link to="/GalerieC" aria-label="Galerie">Galerie</Link></li>
            <li><Link to="/DocuProg" aria-label="Aspect programmation">Aspect Prog</Link></li>
            <li><Link to="/Documentation" aria-label="Documentation">Documentation</Link></li>
            <li><Link to="/APropos" aria-label="À propos">À Propos</Link></li>
            <li onClick={() => setTheme(theme === 'clair' ? 'sombre' : 'clair')} className="theme-toggle" aria-label="Changer le thème" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setTheme(theme === 'clair' ? 'sombre' : 'clair'); }}>
              {theme === 'clair' ? <Brightness3Icon fontSize="large" color="primary" /> : <BrightnessHighIcon fontSize="large" color="action"/>}
            </li>
            <li onClick={handleToggleHeaderStd} className="BtnSwitch" aria-label="Changer l'affichage du header/footer" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleToggleHeaderStd(); }}>
              {toggleHeaderStd ? <FlipCameraAndroidIcon fontSize="large" color="primary" /> : <FlipCameraAndroidIcon fontSize="large" color="action"/>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
