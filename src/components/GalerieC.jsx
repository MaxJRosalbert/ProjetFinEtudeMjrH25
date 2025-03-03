import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import AfterEffects from "../assets/Icones/AfterEffects.png";
import FondVert from "../assets/Icones/FondVert.png";
import Houdini3D from "../assets/Icones/Houdini3D.png";
import Mixamo from "../assets/Icones/Mixamo.png";
import Photoshop from "../assets/Icones/Photoshop.png";
import PremierePro from "../assets/Icones/PremierePro.png";
import VideoCamera from "../assets/Icones/VideoCamera.png";

// Images & Videos used in CartesVFX (this is the crucial fix):
import PluieMeteorImg from "../assets/img/PluieMeteor.png";
import PluieMeteorVideo from "../assets/video/PluieDeMeteor.mp4";
import HommeSableImg from "../assets/img/HommeSable.png";
import HommeSableVideo from "../assets/video/HommeSable.mp4";
import CubeFumeeImg from "../assets/img/CubeFumée.png";
import CubeFumeeVideo from "../assets/video/MoveFumée.mp4";
import TesseractImg from "../assets/img/ImgTentTésseract0.jpg";
import TesseractVideo from "../assets/video/Tentative Tesseract.mp4";

import '../styles/styles.scss';

function GalerieC() {
    const [activeCard, setActiveCard] = useState(null);
    const [activeCardInfo, setActiveCardInfo] = useState({});
    const videoRef = useRef(null);

    const CartesVFX = [
      { 
        titre: "Pluie de de météor", 
        info: "Info de la video 1",
        image: PluieMeteorImg,
        video: PluieMeteorVideo,
        nomLog: ["Houdini", "After Effects", "Premiere pro", "Technique Fond vert", "Tournage camera"],
        icones: [ 
          Houdini3D, 
          AfterEffects,
          PremierePro,
          FondVert, 
          VideoCamera
        ] 
      },
      { 
        titre: "Homme Sable", 
        info: "Info de la video 2",
        image: HommeSableImg,
        video: HommeSableVideo,
        nomLog: ["Houdini", "Mixamo", "After Effects", "Premiere pro", "Technique Fond vert", "Tournage camera"],
        icones: [ 
          Houdini3D,
          Mixamo, 
          FondVert, 
          AfterEffects,
          PremierePro,
          VideoCamera
        ] 
      },
      { 
        titre: "Cube de fumé", 
        info: "Info de la video 3",
        image: CubeFumeeImg,
        video: CubeFumeeVideo,
        nomLog: ["Houdini", "After Effects", "Premiere pro", "Technique Fond vert", "Tournage camera"],
        icones: [ 
          Houdini3D, 
          AfterEffects,
          PremierePro,
          FondVert, 
          VideoCamera
        ] 
      },
      { 
        titre: "Tentative de tesseract", 
        info: "Info de la video 4",
        image: TesseractImg,
        video: TesseractVideo,
        nomLog: ["Houdini", "After Effects"],
        icones: [ 
          Houdini3D, 
          AfterEffects
        ] 
      }
  ];

    const handleCardClick = (index) => {
      if (activeCard === index) {
        setActiveCard(null);
        setActiveCardInfo({});
        if (videoRef.current) videoRef.current.pause();
      } else {
        setActiveCard(index);
        setActiveCardInfo(CartesVFX[index]);
        if (videoRef.current) videoRef.current.play();
      }
    };

    return (
        <section className="galerie">

          <motion.section 
            className="TitreGalerie"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.25 }}>
      
            <h1>Galerie de cartes</h1>
            <p>Cette Section présente la galerie des séquences VFX réalisées ainsi que des informations sommaires sur chacune d'entre elles, les techniques de tournage nécéssaires à la création et les logiciels utilisés à la réalisation.</p>
          </motion.section>

          <motion.section className="GrilleCartes" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}>
            {CartesVFX.map((carte, index) => (
              <React.Fragment key={index}>
                <article key={index} className={`Carte ${activeCard === index ? 'active' : ''}`} onClick={() => handleCardClick(index)}>
                  <section className="ContenueCarte">
                    <h4 className="TitreCarte">{carte.titre}</h4>
                    <img className="Decor" src={carte.image} alt={carte.titre} />
                    <div className="Pied2Carte">
                      {carte.icones.map((icone, i) => (
                        <img src={icone} className={`BulleLog ${icone}`} alt={`Icône ${i}`} key={i}/>
                      ))}
                    </div>
                  </section>
                </article>
                
                {activeCard === index && (
                  <motion.div className="LecteurVideoMobile" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.25 }}>
                    <h4 className="TitreInfoCarteV">{activeCardInfo.titre}</h4>
                    <video ref={videoRef} src={CartesVFX[activeCard].video} controls autoPlay />
                    <p className="TxtInfoCarteV">{activeCardInfo.info}</p>
                    <div className="Pied2PageInfoCarteV">
                      <section className="BlocLog">
                      {activeCardInfo.nomLog && activeCardInfo.nomLog.map((log, i) => (
                        <section key={i} className="logicielUtil">
                          <img className="BulleLog" src={activeCardInfo.icones[i]} alt={`Icône ${i}`} key={i} />
                          <h5>{log}</h5>
                        </section>
                      ))}
                      </section>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.section>


          {activeCard !== null && (
            <motion.div className="LecteurVideoD" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.25 }}>
              
              <video ref={videoRef} src={CartesVFX[activeCard].video} controls autoPlay />
              
              <article className="InfoCarteV">
                <h4 className="TitreInfoCarteV">{activeCardInfo.titre}</h4>
                <p className="TxtInfoCarteV">{activeCardInfo.info}</p>
                <div className="Pied2PageInfoCarteV">
                  <section className="BlocLog">
                  {activeCardInfo.nomLog && activeCardInfo.nomLog.map((log, i) => (
                    <section key={i} className="logicielUtil">
                      <img className="BulleLog" src={activeCardInfo.icones[i]} alt={`Icône ${i}`} key={i} />
                      <h5>{log}</h5>
                    </section>
                  ))}
                  </section>
                </div>
              </article>

            </motion.div>
          )}
        </section>
    );
}

export default GalerieC;
