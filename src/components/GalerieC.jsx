import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QRCodeCanvas } from 'qrcode.react';

// Icons de Logiciels
import AfterEffects from "../assets/Icones/AfterEffects.png";
import FondVert from "../assets/Icones/FondVert.png";
import Houdini3D from "../assets/Icones/Houdini3D.png";
import Mixamo from "../assets/Icones/Mixamo.png";
import Photoshop from "../assets/Icones/Photoshop.png";
import PremierePro from "../assets/Icones/PremierePro.png";
import VideoCamera from "../assets/Icones/VideoCamera.png";

// Images de cartes VFX
import PluieMeteorImg from "../assets/img/PluieMeteor.png";
import HommeSableImg from "../assets/img/HommeSable.png";
import CubeFumeeImg from "../assets/img/CubeFumée.png";
import TesseractImg from "../assets/img/ImgTentTésseract0.jpg";

// Vidéos de séquences VFX
import PluieMeteorVideo from "../assets/video/PluieDeMeteor.mp4";
import HommeSableVideo from "../assets/video/HommeSable.mp4";
import CubeFumeeVideo from "../assets/video/MoveFumée.mp4";
import TesseractVideo from "../assets/video/Tentative Tesseract.mp4";

import '../styles/styles.scss';

const images = [
  // ... liste d'images ou import dynamique ...
];
const IMAGES_PER_PAGE = 12;

function GalerieC() {
    const [activeCard, setActiveCard] = useState(null);
    const [activeCardInfo, setActiveCardInfo] = useState({});
    const videoRef = useRef(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);

    const CartesVFX = [
      { 
        titre: "Pluie de météores", 
        info: "Pour ajouter un peu de spectaculaire, j'ai tenté de reproduire une pluie de météores. Cela m'a permis d'expérimenter les particules de feu avec un objet physique. Le résultat était satisfaisant et j'ai pu l'embellir au montage et avec quelques idées pour la mise en valeur grâce à mes séquences sur fond vert.",
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
        info: "Étant fan de Spiderman et voulant expérimenter l'intégration humaine dans les VFX, j'ai tenté de reproduire l'homme sable de Marvel. En expérimentant les particules d'objet pour en faire du sable et la capture de mouvement 3D avec Mixamo, j'ai pu reproduire cette scène. Ce VFX fut d'ailleurs particulièrement long (avec le tesseract) pour le temps de rendu final.",
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
        titre: "Cube de fumée", 
        info: "Après un tesseract mitigé, j'ai tout de même eu l'idée de retirer les particules générées (qui faisaient défaut au résultat final) et de conserver le reste (notamment le rendu fumée) pour pouvoir créer une boule de fumée. Cette idée m'est venue en essayant de rattraper mon tesseract et en trouvant que la boule de fumée ressemblait un peu au rasengan de Naruto. Je l'ai donc récupérée et avec mes séquences tournées sur fond vert avec des accessoires de tracking, cela a engendré ce projet.",
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
        info: "Comme 1er VFX et pour me familiariser davantage avec le logiciel Houdini, j'ai tenté de reproduire le tesseract de Loki dans Avengers. Dans l'ensemble, cela s'est bien passé (j'ai pu expérimenter les particules de forme et de vent), mais suite à des complications arrivées lors de la préparation pour le rendu, le résultat n'est pas celui désiré (notamment que le rendu empêche de voir le niveau de particules conçu et généré).",
        image: TesseractImg,
        video: TesseractVideo,
        nomLog: ["Houdini", "After Effects"],
        icones: [ 
          Houdini3D, 
          AfterEffects
        ] 
      }
  ];

    // Liste des logiciels pour le filtrage
    const allSoftwares = Array.from(new Set(CartesVFX.flatMap(c => c.nomLog)));

    // Filtrage dynamique
    const filteredCartes = CartesVFX.filter(carte => {
      const matchTitre = carte.titre.toLowerCase().includes(search.toLowerCase());
      const matchLog = filter ? carte.nomLog.includes(filter) : true;
      return matchTitre && matchLog;
    });

    const totalPages = Math.ceil(filteredCartes.length / IMAGES_PER_PAGE);
    const paginatedCartes = filteredCartes.slice(
      (page - 1) * IMAGES_PER_PAGE,
      page * IMAGES_PER_PAGE
    );

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
            <p>Cette Section présente la galerie des séquences VFX réalisées ainsi que des informations sommaires sur chacune d'entre elles, les techniques de tournage nécéssaires à la création et les logiciels utilisés à la réalisation. Dans la globalité, ce sont des VFX avec des incrustations de moi sur fond vert et du tracking via des accessoires et des techniques plus avancées d'after effects.</p>
            <div className="RechercheFiltre">
              <input
                type="text"
                placeholder="Rechercher une carte..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="input-recherche"
              />
              <select value={filter} onChange={e => { setFilter(e.target.value); setPage(1); }} className="select-filtre">
                <option value="">Tous les logiciels</option>
                {allSoftwares.map((soft, idx) => (
                  <option value={soft} key={idx}>{soft}</option>
                ))}
              </select>
            </div>
          </motion.section>

          <motion.section className="GrilleCartes" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}>
            {paginatedCartes.map((carte, index) => {
              // Trouver l'index réel dans CartesVFX
              const realIndex = CartesVFX.findIndex(c => c.titre === carte.titre);
              return (
                <React.Fragment key={realIndex}>
                  <article key={realIndex} className={`Carte ${activeCard === realIndex ? 'active' : ''}`} onClick={() => handleCardClick(realIndex)}>
                    <section className="ContenueCarte">
                      <h4 className="TitreCarte">{carte.titre}</h4>
                      <img className="Decor" src={carte.image} alt={carte.titre} loading="lazy" />
                      <div className="Pied2Carte">
                        {carte.icones.map((icone, i) => (
                          <img src={icone} className={`BulleLog ${icone}`} alt={`Icône ${i}`} key={i}/>
                        ))}
                      </div>
                    </section>
                  </article>
                  {activeCard === realIndex && (
                    <motion.div className="LecteurVideoMobile" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ duration: 0.25 }}>
                      <h4 className="TitreInfoCarteV">{activeCardInfo.titre}</h4>
                      <video ref={videoRef} src={CartesVFX[activeCard].video} controls />
                      <p className="TxtInfoCarteV">{activeCardInfo.info}</p>
                      <div className="QRCodeBloc">
                        <span>QR Code :</span>
                        <QRCodeCanvas value={`${window.location.origin}/vfx/${encodeURIComponent(activeCardInfo.titre)}`} size={80} />
                      </div>
                      <div className="Pied2PageInfoCarteV">
                        <section className="BlocLog">
                        {activeCardInfo.nomLog && activeCardInfo.nomLog.map((log, i) => (
                          <section key={i} className="logicielUtil">
                            <img className="BulleLog" src={activeCardInfo.icones[i]} alt={`Icône ${activeCardInfo.nomLog ? activeCardInfo.nomLog[i] : i}`} key={i} />
                            <h5>{log}</h5>
                          </section>
                        ))}
                        </section>
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.section>

          <div className="galerie-pagination">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}><ArrowBackIosIcon /></button>
            <span>Page {page} / {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}><ArrowForwardIosIcon /></button>
          </div>

          {activeCard !== null && (
            <motion.div className="LecteurVideoD" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.25 }}>
              
              <video ref={videoRef} src={CartesVFX[activeCard].video} controls  />
              
              <article className="InfoCarteV">
                <h4 className="TitreInfoCarteV">{activeCardInfo.titre}</h4>
                <p className="TxtInfoCarteV">{activeCardInfo.info}</p>
                <div className="QRCodeBloc">
                  <span>QR Code :</span>
                  <QRCodeCanvas value={`${window.location.origin}/vfx/${encodeURIComponent(activeCardInfo.titre)}`} size={100} />
                </div>
                <div className="Pied2PageInfoCarteV">
                  <section className="BlocLog">
                  {activeCardInfo.nomLog && activeCardInfo.nomLog.map((log, i) => (
                    <section key={i} className="logicielUtil">
                      <img className="BulleLog" src={activeCardInfo.icones[i]} alt={`Icône ${activeCardInfo.nomLog ? activeCardInfo.nomLog[i] : i}`} key={i} />
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
