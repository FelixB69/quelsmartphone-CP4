/* eslint-disable no-restricted-globals */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../css/modele.module.css";
import trash from "../images/x-button.png";
import arrow from "../images/left-arrow.png";
import pen from "../images/pen.png";

function Modele({ phone }) {
  const navigate = useNavigate();
  const [phoneById, setphoneById] = useState("");
  const [comment, setComment] = useState(false);
  const [valueComment, setValueComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/phone/${id}`).then((res) => {
      setphoneById(res.data);
    });
  }, []);

  const modifyComment = () => {
    axios
      .put(`http://localhost:5000/phone/${id}`, {
        commentaire: valueComment,
      })
      .then(() => setComment(false))
      .then(() => setValueComment(valueComment))
      .finally(location.reload());
  };

  const deletePhone = () => {
    axios
      .delete(`http://localhost:5000/phone/${id}`)
      .then(() =>
        navigate("/smartphones", {
          replace: true,
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <>
      <img
        src={arrow}
        alt="back"
        width={50}
        height={50}
        onClick={() =>
          navigate("/smartphones", {
            replace: true,
          })
        }
        className={styles.arrow}
      ></img>
      <div className={styles.head}>
        <div className={styles.name}>{phoneById.nom}</div>
        <img
          src={trash}
          alt="suppr"
          width={30}
          height={30}
          onClick={deletePhone}
        ></img>
      </div>
      <div className={styles.container}>
        <img alt={phoneById.nom} src={phoneById.image} className={styles.img} />
        <div className={styles.caracs}>
          <div className={styles.caracte}>Caractéristiques</div>
          <div className={styles.items}>Note : {phoneById.note}</div>
          <div className={styles.items}>Prix : {phoneById.prix}</div>
          <div className={styles.items}>Ecran : {phoneById.ecran}</div>
          <div className={styles.items}>Appareil photo : {phoneById.photo}</div>
          <div className={styles.items}>
            Indice de réparabilité : {phoneById.indice}
          </div>
          <div className={styles.comments}>
            <div className={styles.items}>
              Commentaire : {phoneById.commentaire}{" "}
            </div>
            <img
              width={35}
              height={35}
              src={pen}
              alt="pen"
              onClick={() => setComment(!comment)}
            ></img>
          </div>
          {comment && (
            <>
              <textarea
                value={valueComment}
                onChange={(e) => setValueComment(e.target.value)}
              ></textarea>
              <button className={styles.add} onClick={modifyComment}>
                Modifier
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Modele;
