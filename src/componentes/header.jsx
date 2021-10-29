import desktop from "../recursosGifos/desktop.svg";
import "../css/header.css";
import React from "react";

export default function Header(props) {
  const manejarClick = () => {
    props.setDarkMode(!props.isDarkMode);
  };

  return (
    <div className="primer-rectangulo">
      <div className="Gifos">
        <img src={desktop} alt="Gifos" />
      </div>
      <button className="btn modo" onClick={manejarClick}>
        Modo {props.isDarkMode ? "dark" : "light"}
      </button>
    </div>
  );
}
