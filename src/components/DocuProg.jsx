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
import { Button } from '@mui/material';

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

        <h2>Logiciel pour la Programmation</h2>

        <label className="Burger" htmlFor="MenuDocu4">
          <Button onClick={toggleIcon4}>
            {isToggled4 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' color='warning'/>}
          </Button>
        </label>
        <input type="checkbox" id="MenuDocu4" />
        
        <section className="ContenuDoc">
          <p>Pour commencer, j'ai conçu une maquette numérique de mon application web sur Adobe Xd. Ensuite, le développement de l'application web a été réalisé sur VS Code et finalement son hébergement est assuré par GitHub.</p>
          <ul>
            <li><img src={Xd} alt="Logo Adobe Xd" /></li>
            <li><img src={VsCode} alt="Logo VS Code" /></li>
            <li><img src={GitHub} alt="Logo GitHub" /></li>
          </ul>
        </section>
      </motion.article>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>

        <h2>Langage de Programmation</h2>

        <label className="Burger" htmlFor="MenuDocu5">
          <Button onClick={toggleIcon5}>
            {isToggled5 ? <ExpandLessIcon fontSize='large' className='FlecheB' /> : <ExpandMoreIcon fontSize='large' className='FlecheH' color='warning'/>}
          </Button>
        </label>
        <input type="checkbox" id="MenuDocu5" />
        
        <section className="ContenuDoc">
          <p>Le développement initial de l'application web reposait sur une architecture HTML, Sass et JavaScript. Afin d'optimiser les performances et la complexité du code, une refonte a été effectuée avec React, JSX et Vite.</p>
          <ul>
            <li><img src={Html} alt="Html" /></li>
            <li><img src={Sass} alt="Sass" /></li>
            <li><img src={JavaScript} alt="JavaScript" /></li>
            <li><img src={CReact} alt="CReact" /></li>
            <li><img src={Vitejs} alt="Vitejs" /></li>
          </ul>
        </section>
      </motion.article>

    </section>
  );
}

export default DocuProg;
