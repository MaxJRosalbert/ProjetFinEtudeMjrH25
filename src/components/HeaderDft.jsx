import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/Logo MJR Clr.png';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

function HeaderDft() {
  const [theme, setTheme] = useState('sombre');
  const [toggleHeaderStd, setToggleHeaderStd] = useState(() => {
    return localStorage.getItem('toggleHeaderStd') === 'true';
  });

  useEffect(() => {
    document.body.classList.remove('theme-clair', 'theme-sombre');
    document.body.classList.add(theme === 'clair' ? 'theme-clair' : 'theme-sombre');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'clair' ? 'sombre' : 'clair');
  };

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
    // Correction : ne pas déclencher StorageEvent manuellement
  };

  return (
    <nav className="HeaderDft">
      <div className="Logo">
        <Link to="/Accueil"><img src={logo} alt="Logo du site MJR" /></Link>
      </div>

      <ul className="menu">
        <li><Link to="/Accueil"><span>Accueil</span></Link></li>
        <li><Link to="/GalerieC"><span>Galerie</span></Link></li>
        <li><Link to="/DocuProg"><span>Aspect Prog</span></Link></li>
        <li><Link to="/Documentation"><span>Documentation</span></Link></li>
        <li><Link to="/APropos"><span>À Propos</span></Link></li>
        <li onClick={toggleTheme} className="theme-toggle" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') toggleTheme(); }}>
          {theme === 'clair' ? <Brightness3Icon fontSize="large" color="primary" /> : <BrightnessHighIcon fontSize="large" color="action"/>}
        </li>
        <li onClick={handleToggleHeaderStd} className="BtnSwitch" tabIndex={0} role="button" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleToggleHeaderStd(); }}>
          {toggleHeaderStd ? <FlipCameraAndroidIcon fontSize="large" color="primary" /> : <FlipCameraAndroidIcon fontSize="large" color="action"/>}
        </li>
      </ul>
    </nav>
  );
}

export default HeaderDft;
