import React, { useEffect } from 'react';

import Starrating from '../../components/Carrossal/Starrating';
import './logement.scss';
import Caroossale from '../../components/Carrossal/Caroossale';

import { useNavigate, useParams } from 'react-router-dom';
import logements from '../../data/logements.json';

import Collapse from '../../components/Collapse/Collapse';
function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((l) => l.id === id);
  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  return (
    <>
    <div className="style-logement ">
      
      {logement && (
        <div className="container-logement">
         
          <Caroossale logement={logement} />
          <div className="item1-logement">
            <div className="logementtitle">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>

            <div className="host-logement">
              <p className="name-host">
                {logement.host
                  ? logement.host.name
                  : "Nom de l'hôte non disponible"}
              </p>
              {logement.host && logement.host.picture ? (
                <img
                  src={logement.host.picture}
                  alt="logo-host"
                  style={{
                    borderRadius: '50%',
                    width: '64px',
                    height: '64px',
                  }}
                />
              ) : (
                <p>Image non disponible</p>
              )}
            </div>
          </div>

          <div className="item2-logement">
            <div className="tage-logement">
              {logement.tags && logement.tags.length > 0 ? (
                logement.tags.map((tage, index) => (
                  <div className="tage" key={index}>
                    <p className="text-tag">{tage}</p>
                  </div>
                ))
              ) : (
                <p>Aucun tag disponible</p>
              )}
            </div>
            <div className="etoile-logement">
              <div>
                <Starrating rating={logement.rating} />
              </div>
              <div className="host-logement-hidden">
                <p className="name-host">
                  {logement.host
                    ? logement.host.name
                    : "Nom de l'hôte non disponible"}
                </p>
                {logement.host && logement.host.picture ? (
                  <img
                    src={logement.host.picture}
                    alt="logo-host"
                    style={{
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                    }}
                  />
                ) : (
                  <p>Image non disponible</p>
                )}
              </div>
            </div>
          </div>
          <div className="item3-logement">
  <Collapse
    title="Description"
    content={logement.description}
    className="collapse"
  />
  <Collapse
    title="Équipements"
    content={logement.equipments}
    className="collapse liste-equipement"
  />
</div>

        </div>
      )}

     
    </div>
   
    </>
  );

}

export default Logement;
