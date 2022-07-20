import axios from "axios";
import React, { useEffect, useState } from "react";
import Phone from "../components/Phone";
import styles from "../css/result.module.css";

function Smartphones() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/phone")
      .then((res) => res.data)
      .then((data) => {
        setResult(data);
      })
      .catch(() => {
        alert("No search results");
      });
  }, []);

  console.log(result);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Choisissez votre smartphone</div>
      <div className={styles.list}>
        {result.map((phone) => (
          <Phone phone={phone} />
        ))}
      </div>
      <div className={styles.title}>
        Contribuez au développement de la plateforme...
      </div>
      <form>
        <div className={styles.base}>
          <select>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
          </select>
          <input type="text" placeholder="Modèle"></input>

          <input type="text"></input>

          <input type="text"></input>
          <input type="text"></input>
        </div>
        <div className={styles.base}>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>

          <select>
            <option value="Pour travailler">Pour travailler</option>
            <option value="Pour prendre des storys">
              Pour prendre des storys
            </option>
            <option value="Juste pour appeler">Juste pour appeler</option>
          </select>
          <select>
            <option value="Riche">Riche</option>
            <option value="Entre les deux">Entre les deux</option>
            <option value="Pauvre">Pauvre</option>
          </select>
        </div>
        <textarea placeholder="Commentaire"></textarea>
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default Smartphones;
