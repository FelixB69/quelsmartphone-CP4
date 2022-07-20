import axios from "axios";
import React, { useEffect, useState } from "react";
import Phone from "../components/Phone";

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
    <>
      <div>Trouvez votre smartphone</div>
      {result.map((phone) => (
        <Phone phone={phone} />
      ))}
    </>
  );
}

export default Smartphones;
