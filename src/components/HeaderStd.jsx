import React, { useState, useEffect } from "react";

function HeaderStd() {
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
    const onCustomSync = (e) => {
      const newState = localStorage.getItem('toggleHeaderStd') === 'true';
      setToggleHeaderStd(newState);
      applyToggle(newState);
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener('toggleHeaderStdSync', onCustomSync);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('toggleHeaderStdSync', onCustomSync);
    };
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
    // Synchronisation immédiate dans la même fenêtre
    window.dispatchEvent(new Event('toggleHeaderStdSync'));
  };

  return (
    <div className={`HeaderStd ${toggleHeaderStd ? 'ActiveHeaderStd' : ''}`}>
      <button onClick={handleToggleHeaderStd}>
        Toggle Header Standard
      </button>
    </div>
  );
}

export default HeaderStd;