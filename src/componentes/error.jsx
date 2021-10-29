import React from "react";
import "../css/error.css";
import sorry from "../recursosGifos/sorry.png";

const Error = (prop) => {
  return (
    <div>
      <div className="error">
        <img src={sorry} alt="sorry" className="sorry" />
        <h3>Lo sentimos, no encontramos lo que buscas.</h3>
        <h4>¡Inténtalo de nuevo!</h4>
      </div>
    </div>
  );
};

export default Error;
