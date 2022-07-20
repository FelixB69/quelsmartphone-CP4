import React from "react";
import styles from "../css/phone.module.css";

function Phone({ phone }) {
  return (
    phone && (
      <div className={styles.container}>
        <img alt={phone.nom} src={phone.image} className={styles.img} />
        <div className={styles.name}>{phone.nom}</div>
      </div>
    )
  );
}

export default Phone;
