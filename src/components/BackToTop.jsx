import React, { useEffect, useState } from "react";
import "../styles/backToTop.scss";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
    >
      ↑
    </button>
  ) : null;
};

export default BackToTop;