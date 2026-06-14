import React, { useState } from "react";
import rightArrow from "../../components/Carrossal/rightArrow/arrow_back.png";
import leftArrow from "../../components/Carrossal/leftArrow/arrow_forward.png";
import "./carrossale.scss";
// import logements from "../../data/logements.json";
function Carrossal({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="logement-page">
      <div className="logement-pictures">
        {logement.pictures.length > 0 ? (
          <img
            src={logement.pictures[currentIndex]}
            alt="Imae du logement"
            className="logement-picture"
          
          />
        ) : (
          <p>Aucune autre image disponible</p>
        )}

        {/* Affiche les flèches seulement s'il y a plus d'une image */}
        {logement.pictures.length > 1 && (
          <>
            <img
              src={rightArrow}
              onClick={goToPrevious}
              alt="Flèche gauche"
              className="arrow arrow-left"
            />
            <img
              src={leftArrow}
              onClick={goToNext}
              alt="Flèche droite"
              className="arrow arrow-right"
            />
          </>
        )}
        <div className="slide-picture">
          {logement.pictures.length > 1 && (
            <p>
              {currentIndex + 1} / {logement.pictures.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrossal;
