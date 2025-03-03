import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeaderDft from "./components/HeaderDft.jsx";
import FooterStd from "./components/Footer.jsx";
import FooterDft from "./components/footerDft.jsx";
import GalerieC from "./components/GalerieC.jsx";
import Accueil from "./components/Accueil.jsx";
import DocuProg from "./components/DocuProg.jsx";
import APropos from "./components/APropos.jsx";
import Documentation from "./components/Documentation.jsx";
// import './App.scss';
import './styles/styles.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <HeaderDft/>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/GalerieC" element={<GalerieC />} />
            <Route path="/Documentation" element={<Documentation />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="/DocuProg" element={<DocuProg />} />
          </Routes>
          <FooterDft/>
        </main>
        <FooterStd />
      </div>
    </Router>
  );
}

export default App;
