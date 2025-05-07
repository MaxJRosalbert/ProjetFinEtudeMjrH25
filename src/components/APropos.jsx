import React from "react";
import { motion } from "framer-motion";
import ImgMax from '../assets/img/Mjr.jpg';
import '../styles/styles.scss';

function APropos() {
  return (
    <section className="APropos">
      <motion.section 
        className="AProposTitre"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}>
        <h1>À Propos</h1>
        <p>Bienvenue sur mon site. Je suis Max-J Rosalbert, étudiant finissant en technique d'intégration multimédia au Collège de Maisonneuve.</p>
      </motion.section>

      <motion.section 
        className="PhotoProfil"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>
        <img src={ImgMax} alt="Photo de Max-J Rosalbert" />                  
      </motion.section>
      
      <motion.section 
        className="AProposVrac"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2>Le projet et moi</h2>
        <ul className="ListeInfo">
          <li>
            <h3>Pourquoi ce projet</h3>
            <p>Ce projet a été choisi pour rendre hommage à un jeu d'enfance que j'ai réalisé avec des cartes (que je dessinais et que j'ai conservées encore aujourd'hui) qui donnaient des pouvoirs.</p>
          </li>
          <li>
            <h3>Degré de satisfaction</h3>
            <p>Je suis globalement assez satisfait du résultat final ; un peu moins du cheminement dans la phase de conception, mais j'ai bien aimé le projet et ce que j'en ai fait.</p>
          </li>
          <li>
            <h3>Idées d'ajout pour l'avenir</h3>
            <p>J'aimerais bien intégrer davantage de cartes VFX et avec une meilleure image personnalisée pour chaque carte.</p>
            <p>J'aimerais bien héberger les données globales (tableau de chaque carte, texte et média) dans Firebase de Google.</p>
            <p>J'aimerais rajouter 2 autres fonctionnalités à mon application web : un bouton permettant de changer de thème de couleur et un thème permettant de changer la disposition du header et du footer.</p>
          </li>
        </ul>      
      </motion.section>

    </section>

    
  );
}

export default APropos;