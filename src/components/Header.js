import React from "react";
import styles from "../css/header.module.css";

function Header() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.title}>📱 QuelSmartphone.com</div>
        <div className={styles.menu}>
          <div className={styles.item}>Concept</div>
          <div className={styles.item}>Simulateur</div>
          <div className={styles.item}>Smartphones</div>
        </div>
      </div>
    </>
  );
}

export default Header;
