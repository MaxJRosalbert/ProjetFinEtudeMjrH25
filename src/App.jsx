import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header.jsx";
import HeaderDft from "./components/HeaderDft.jsx";
import FooterStd from "./components/Footer.jsx";
import FooterDft from "./components/footerDft.jsx";
import GalerieC from "./components/GalerieC.jsx";
import Accueil from "./components/Accueil.jsx";
import DocuProg from "./components/DocuProg.jsx";
import APropos from "./components/APropos.jsx";
import Documentation from "./components/Documentation.jsx";
import NotFound from "./components/404.jsx";
import './styles/styles.scss';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <main>
        <HeaderDft />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><Accueil /></motion.div>} />
            <Route path="/Accueil" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><Accueil /></motion.div>} />
            <Route path="/GalerieC" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><GalerieC /></motion.div>} />
            <Route path="/Documentation" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><Documentation /></motion.div>} />
            <Route path="/APropos" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><APropos /></motion.div>} />
            <Route path="/DocuProg" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}><DocuProg /></motion.div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <FooterDft />
      </main>
      <FooterStd />
    </div>
  );
}

export default App;
