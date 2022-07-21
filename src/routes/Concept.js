import React from "react";
import styles from "../css/concept.module.css";
import gif from "../images/smart.gif";

function Concept() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Simplifiez vos recherches de smartphone pour optimiser votre temps à
        picoller 🥂
      </div>
      <div className={styles.bullet}>
        1. Bénéficiez d’une intelligence artificielle qui adapte ses résultats à
        vos besoins
      </div>
      <div className={styles.bullet}>
        2. Découvrez les derniers produits fabriqués avec amour par des
        ouïghours
      </div>
      <div className={styles.bullet}>
        3. Soyez fiers d’avoir toujours le DERNIER smartphone et narguez vos
        amis
      </div>
      <div className={styles.gif}>
        <img alt="gif" src={gif}></img>
      </div>
    </div>
  );
}

export default Concept;
