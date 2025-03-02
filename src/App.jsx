import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderDft from "./components/HeaderDft";
import FooterStd from "./components/Footer";
import FooterDft from "./components/footerDft";
import GalerieC from "./components/GalerieC";
import Accueil from "./components/Accueil";
import DocuProg from "./components/DocuProg";
import APropos from "./components/APropos";
import Documentation from "./components/Documentation";
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
