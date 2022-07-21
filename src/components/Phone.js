import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/phone.module.css";

function Phone({ phone }) {
  const navigate = useNavigate();

  return (
    phone && (
      <div className={styles.container}>
        <img
          alt={phone.nom}
          src={phone.image}
          className={styles.img}
          onClick={() => {
            navigate(`/modele/${phone.id}`, {
              replace: true,
            });
          }}
        />
        <div className={styles.name}>{phone.nom}</div>
      </div>
    )
  );
}

export default Phone;
