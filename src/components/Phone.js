import React from "react";

function Phone({ phone }) {
  return (
    phone && (
      <>
        <img alt={phone.nom} src={phone.image} />
        <div>{phone.nom}</div>
      </>
    )
  );
}

export default Phone;
