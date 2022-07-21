import React from "react";
import styles from "../css/header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "#008f8f" : "white",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.nav}>
        <div
          className={styles.title}
          onClick={() => {
            navigate("/", {
              replace: true,
            });
          }}
        >
          📱 QuelSmartphone.com
        </div>
        <div className={styles.menu}>
          <NavLink
            to="/concept"
            className={styles.navLink}
            style={getActiveLinkStyle}
          >
            <div className={styles.item}>Concept</div>
          </NavLink>
          <NavLink
            to="/simulateur"
            className={styles.navLink}
            style={getActiveLinkStyle}
          >
            <div className={styles.item}>Simulateur</div>
          </NavLink>
          <NavLink
            to="/smartphones"
            className={styles.navLink}
            style={getActiveLinkStyle}
          >
            <div className={styles.item}>Smartphones</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
