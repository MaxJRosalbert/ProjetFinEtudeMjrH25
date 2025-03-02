import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../styles/styles.scss';

import VsCode from "../assets/Icones/VsCode.png";
import GitHub from "../assets/Icones/GitHub.png";
import Xd from "../assets/Icones/Xd.png";

import Html from "../assets/Icones/Html.png";
import Sass from "../assets/Icones/Sass.png";
import CReact from "../assets/Icones/React.png";
import Vitejs from "../assets/Icones/Vitejs.png";
import JavaScript from "../assets/Icones/JavaScript.png";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function DocuProg() {

  const [isToggled4, setIsToggled4] = useState(false);

  const toggleIcon4 = () => {
    setIsToggled4(!isToggled4);
  };
  const [isToggled5, setIsToggled5] = useState(false);

  const toggleIcon5 = () => {
    setIsToggled5(!isToggled5);
  };


  return (
    <section className="DocuProg">

      <motion.section 
        className="TitreDocuProg"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.25 }}>
  
        <h1>Aspect Programmation du projet</h1>
        <p>Cette Section regroupe les renseignements nécéssaires et pertinents à savoir dans le volet Programmation du projet (Language de programmation, Logiciel...).</p>
      </motion.section>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>

        <h2>Logiciel pour la Prog</h2>

        <label className="Burger" htmlFor="MenuDocu4">
          <button onClick={toggleIcon4}>
            {isToggled4 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu4" />
        
        <section className="ContenuDoc">:
          <p>Pour Commencer, j'ai conçu une maquette numérique de mon application Web sur Adobe Xd. Ensuite, le développement de l'application web a été réalisé sur VsCode et finalement son hébergement est assuré par GitHub.</p>
          <ul>
            <img src={Xd} alt="Xd" />
            <img src={VsCode} alt="VsCode" />
            <img src={GitHub} alt="GitHub" />
          </ul>
        </section>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>

        <h2>Langage de Programmation</h2>

        <label className="Burger" htmlFor="MenuDocu5">
          <button onClick={toggleIcon5}>
            {isToggled5 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' />}
          </button>
        </label>
        <input type="checkbox" id="MenuDocu5" />
        
        <section className="ContenuDoc">
          <p>Le développement initial de l'application web reposait sur une architecture HTML, Sass et JavaScript. Afin d'optimiser les performances et la complexité du code, une refonte a été effectuée avec React, JSX et Vite.</p>
          <ul>
            <img src={Html} alt="Html" />
            <img src={Sass} alt="Sass" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={CReact} alt="CReact" />
            <img src={Vitejs} alt="Vitejs" />
          </ul>
        </section>
      </motion.article>

    </section>
  );
}

export default DocuProg;
