/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Phone from "../components/Phone";
import styles from "../css/result.module.css";
import { useSearchParams } from "react-router-dom";

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => (res[key] = value));
  return res;
}

function Smartphones() {
  const [form, setForm] = useState({
    nom: "",
    marque: "",
    note: "",
    prix: "",
    ecran: "",
    image: "",
    photo: "",
    indice: "",
    commentaire: "",
    utilisation: "",
    eco: "",
  });

  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/phone?${searchParams}`)
      .then((res) => res.data)
      .then((data) => {
        setResult(data);
      })
      .catch(() => {
        alert("No search results");
      });
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/phone", {
        nom: form.nom,
        marque: form.marque,
        note: form.note,
        prix: form.prix,
        ecran: form.ecran,
        image: form.image,
        indice: form.indice,
        commentaire: form.commentaire,
        utilisation: form.utilisation,
        eco: form.eco,
        photo: form.photo,
      })
      .then((res) => setResult((currentPhone) => [...currentPhone, res.data]));

    setForm({
      nom: "",
      marque: "",
      note: "",
      prix: "",
      ecran: "",
      image: "",
      photo: "",
      indice: "",
      commentaire: "",
      utilisation: "",
      eco: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>Choisissez votre smartphone</div>
        <select
          value={searchParams.get("marque") || ""}
          onChange={(e) =>
            setSearchParams({
              ...toObject(searchParams),
              marque: e.target.value,
            })
          }
          className={styles.select}
        >
          <option key={""} value={""}>
            All
          </option>
          {["Samsung", "Apple", "Huawei"].map((marque) => (
            <option key={marque} value={marque}>
              {marque}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.list}>
        {result.map((phone) => (
          <Phone key={phone.id} phone={phone} />
        ))}
      </div>
      <div className={styles.title}>
        Contribuez au développement de la plateforme...
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.base}>
          <select
            value={form.brand}
            onChange={(e) => {
              setForm({ ...form, marque: e.target.value });
            }}
          >
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
          </select>
          <input
            type="text"
            placeholder="Modèle"
            value={form.nom}
            onChange={(e) => {
              setForm({ ...form, nom: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Prix"
            value={form.prix}
            onChange={(e) => {
              setForm({ ...form, prix: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Ecran"
            value={form.ecran}
            onChange={(e) => {
              setForm({ ...form, ecran: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Appareil photo"
            value={form.photo}
            onChange={(e) => {
              setForm({ ...form, photo: e.target.value });
            }}
          />
        </div>
        <div className={styles.base}>
          <input
            type="text"
            placeholder="Note"
            value={form.note}
            onChange={(e) => {
              setForm({ ...form, note: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Image"
            value={form.image}
            onChange={(e) => {
              setForm({ ...form, image: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Indice de réparabilité"
            value={form.indice}
            onChange={(e) => {
              setForm({ ...form, indice: e.target.value });
            }}
          />
          <select
            value={form.utilisation}
            onChange={(e) => {
              setForm({ ...form, utilisation: e.target.value });
            }}
          >
            <option value="Pour travailler">Pour travailler</option>
            <option value="Pour prendre des storys">
              Pour prendre des storys
            </option>
            <option value="Juste pour appeler">Juste pour appeler</option>
          </select>
          <select
            value={form.eco}
            onChange={(e) => {
              setForm({ ...form, eco: e.target.value });
            }}
          >
            <option value="Riche">Riche</option>
            <option value="Entre les deux">Entre les deux</option>
            <option value="Pauvre">Pauvre</option>
          </select>
        </div>
        <textarea
          placeholder="Commentaire"
          value={form.commentaire}
          onChange={(e) => {
            setForm({ ...form, commentaire: e.target.value });
          }}
        />
        <button type="submit" value="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Smartphones;
