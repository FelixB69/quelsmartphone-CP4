import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/simulateur.module.css";

function Simulateur() {
  const brand = ["Samsung", "Apple", "Huawei"];
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.title}>
        La question qui divise tant de couples & de familles... 😥
      </div>
      <div className={styles.question}>Vous êtes plutôt ?</div>
      <div className={styles.button}>
        {brand.map((brandPhone) => (
          <button
            key={brandPhone}
            value={brandPhone}
            type="submit"
            onClick={() =>
              navigate(`/smartphones?marque=${brandPhone}`, {
                replace: true,
              })
            }
          >
            {brandPhone}
          </button>
        ))}
      </div>
    </>
  );
}

export default Simulateur;
