import React from "react";
import styles from "../css/home.module.css";
import fond from "../images/fondPhone.jpg";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.title}>
          Trouvez votre smartphone en moins d’une minute
        </div>
        <button className={styles.button}>Aidez-moi</button>
      </div>
      <img className={styles.img} src={fond} alt="fond" />
    </>
  );
}

export default Home;
