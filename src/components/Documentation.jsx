import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/styles.scss';
import Tp2 from '../assets/Doc/Tp2Creatif.pdf';
import VideoV1 from '../assets/video/V1DuSite.mp4';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Documentation() {

  const [isToggled1, setIsToggled1] = useState(false);

  const toggleIcon1 = () => {
    setIsToggled1(!isToggled1);
  };

  const [isToggled2, setIsToggled2] = useState(false);

  const toggleIcon2 = () => {
    setIsToggled2(!isToggled2);
  };
  
  const [isToggled3, setIsToggled3] = useState(false);

  const toggleIcon3 = () => {
    setIsToggled3(!isToggled3);
  };

  const [isToggled4, setIsToggled4] = useState(false);

  const toggleIcon4 = () => {
    setIsToggled4(!isToggled4);
  };
  const [isToggled5, setIsToggled5] = useState(false);

  const toggleIcon5 = () => {
    setIsToggled5(!isToggled5);
  };

  const Tp1Dwld = () => {
    const link = document.createElement('a');
    link.href = 'URL_DE_VOTRE_FICHIER_PDF.pdf'; // Remplacez cette URL par le chemin vers votre fichier PDF
    link.download = 'nom_du_fichier.pdf'; // Le nom sous lequel le fichier sera téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const Tp2Dwld = () => {
    const link = document.createElement('a');
    link.href = {TP2}; // Remplacez cette URL par le chemin vers votre fichier PDF
    link.download = 'Tp2 Créatif.pdf'; // Le nom sous lequel le fichier sera téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="Documentation">

      <motion.section 
        className="TitreDocumentation"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.25 }}>
  
        <h1>Documentation globale</h1>
        <p>Bienvenue sur notre site. Nous sommes une équipe passionnée dédiée à fournir du contenu de qualité.</p>
      </motion.section>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}>

        <h2>Présentation</h2>

        <label className="Burger" htmlFor="MenuDocu1">
          <button onClick={toggleIcon1}>
            {isToggled1 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu1" />
        <section className="ContenuDoc">
          <p>L’objectif du projet est de concevoir plusieurs séquences d’effets spéciaux (VFX) en utilisant les logiciels Houdini, des techniques de cadrage/mise en scène (à la caméra et en fond vert), et les fonctionnalités avancées d’Adobe Premiere Pro et After Effects (logiciels déjà partiellement expérimentés en classe).</p>
          <p>Ces séquences de VFX seront stockées sur un site web codé par moi-même sur VS Code en HTML/CSS/JavaScript et hébergé sur GitHub. </p>
          <p>Afin de visionner ces séquences VFX, le public pourra consulter le site complet ou utiliser des cartes de jeu personnalisées (à l'image des VFX et conçues sur Photoshop et Illustrator), avec un QR code menant à une page web dédiée à la carte/VFX correspondante. Le nombre de cartes réalisées dépendra du nombre de séquences VFX qu'il sera possible de réaliser.</p>
        </section>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}>

        <h2>Tp1</h2>

        <label className="Burger" htmlFor="MenuDocu2">
          <button onClick={toggleIcon2}>
            {isToggled2 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu2" />

        <section className="ContenuDoc">
        <p>Dans le cadre du Tp 1 de la session, on devait préciser le sujet de notre projet de recherche et procéder à sa planification.</p>
          <p>Dans mon cas, cela se présente ainsi:</p>

          <h3>Introduction</h3>
          <p>Ce rapport présente une analyse approfondie et détaillée du déroulement de mon projet de fin d'études. La méthodologie employée est rigoureuse et claire. L'utilisation d'un tableau Trello, ainsi que ce rapport, permet un suivi optimal de l'avancement. Le travail fourni est conséquent et témoigne d'un investissement personnel important ainsi que de mes compétences en création, programmation, intégration et gestion de projet. La présentation est soignée et facilite la compréhension des résultats, semaine après semaine.</p>

          <h3>Objectif</h3>
          <p>L’objectif du projet est de concevoir plusieurs séquences d’effets spéciaux (VFX) en utilisant les logiciels Houdini, des techniques de cadrage/mise en scène (à la caméra et en fond vert), et les fonctionnalités avancées d’Adobe Premiere Pro et After Effects (logiciels déjà partiellement expérimentés en classe).</p>
          <p>Ces séquences de VFX seront stockées sur un site web codé par moi-même sur VS Code en HTML/CSS/JavaScript et hébergé sur GitHub. </p>
          <p>Afin de visionner ces séquences VFX, le public pourra consulter le site complet ou utiliser des cartes de jeu personnalisées (à l'image des VFX et conçues sur Photoshop et Illustrator), avec un QR code menant à une page web dédiée à la carte/VFX correspondante. Le nombre de cartes réalisées dépendra du nombre de séquences VFX qu'il sera possible de réaliser.</p>

          <h3>Base Initiale</h3>
          <p>Au cours de la dernière année et du cours de Méthodes de recherche et préparation au marché du travail (393-5E1), j’ai pu mettre en place un descriptif de mon projet, lister les VFX que je voudrais réaliser selon certains critères, faire la recherche documentaire et imaginer des visuels pour mon site et mes cartes.  Prenant appui sur ces ressources, je suis prêt à commencer mon projet de fin d’études. </p>

          <p>Le Plan de planification a été fait via Trello </p>
          <p>Le contenu du Tp se trouve  <button onClick={Tp1Dwld}>Dans ce Document PDF</button> </p>
        </section>

      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <h2>Tp2</h2>

        <label className="Burger" htmlFor="MenuDocu3">
          <button onClick={toggleIcon3}>
            {isToggled3 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu3" />
        
        <section className="ContenuDoc">
          <p>Le TP2 consiste à produire le processus créatif qui servira de base pour concevoir et développer l’application multimédia qui sera présenté en fin de session.</p>
          <p>- Il faut concevoir l’UI/UX de l’application multimédia de présentation qui servira à illustrer l’ensemble de vos compétences TIM.</p>
          <p>- Il faut également produire un premier prototype (développement initial) de cette application afin d’en exposer les premiers balbutiements.</p>
          <p>- Le processus créatif doit être sur un élément pertinent et utile au projet (concept de jeu, site web, expérience interactive, etc.).</p>
          <button onClick={Tp2Dwld}>Télécharger le PDF</button>
        </section>

      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>

        <h2>1ère Version</h2>

        <label className="Burger" htmlFor="MenuDocu4">
          <button onClick={toggleIcon4}>
            {isToggled4 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu4" />
        
        <section className="ContenuDoc">:
          <p>Retrouvez ici une vers béta (Wireframe) de l'application web </p>
          <video src={VideoV1} controls autoPlay/>
        </section>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>

        <h2>Version Finale</h2>

        <label className="Burger" htmlFor="MenuDocu5">
          <button onClick={toggleIcon5}>
            {isToggled5 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu5" />
        
        <section className="ContenuDoc">
          <p>Retrouvez ici toutes les informations sur toutes les fonctionnalités possibles de l'application web</p>
          <video src={VideoV1} controls autoPlay/>
        </section>
      </motion.article>

    </section>
  );
}

export default Documentation;
