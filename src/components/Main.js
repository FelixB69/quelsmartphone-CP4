import React from "react";
import { Route, Routes } from "react-router-dom";
import Concept from "../routes/Concept";
import Home from "../routes/Home";
import Modele from "../routes/Modele";
import Simulateur from "../routes/Simulateur";
import Smartphones from "../routes/Smartphones";
import styles from "../css/main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/modele/:id" element={<Modele />} />
      </Routes>
    </main>
  );
}

export default Main;
