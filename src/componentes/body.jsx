import React, { useEffect, useState } from "react";
import ilustra_header from "../recursosGifos/ilustra_header.svg";
import icon_search from "../recursosGifos/icon_search.svg";
import "../css/body.css";
import Error from "./error";

export default function Body(props) {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [autocompletar, setAutocompletar] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);
  const [gifsSugerido, setGifsSugerido] = useState("");
  const [prenderSugerencia, setPrenderSugerencia] = useState(true);

  useEffect(() => {
    if (textoBuscar.length > 2 && prenderSugerencia) {
      setAutocompletar(true);
    } else {
      setAutocompletar(false);
      setPrenderSugerencia(true);
    }

    let apiKey = "ErT4SajFmJKTRMjhTi1xTIYDMEm4DJED";
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${textoBuscar}`
    );
    props.setLoading(true);
    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSugerencias(res.data);
        props.setLoading(false);
      })
      .catch((error) => {
        console.error("Algo salió mal", error);
      });
  }, [textoBuscar]);

  const inputHandler = (e) => {
    setTextoBuscar(e.target.value);
  };

  const sugerenciaHandler = (e) => {
    setGifsSugerido(e.target.innerText);
    setTextoBuscar(e.target.innerText);
    setPrenderSugerencia(false);
    setAutocompletar(false);
    setSugerencias([]);
    props.setLoading(true);
  };
  useEffect(() => {
    let apiKey = "ErT4SajFmJKTRMjhTi1xTIYDMEm4DJED";
    let peticion = null;
    if (gifsSugerido !== "") {
      peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifsSugerido}&limit=12&offset=0&rating=g&lang=en`
      );
    } else {
      peticion = fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q=${gifsSugerido}&limit=12&offset=0`
      );
    }

    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        props.setGiphos(res.data);
        props.setLoading(false);
      });
  }, [gifsSugerido]);

  const buscarGiphos = (event) => {
    const buscar = document.getElementById("textoGifBuscar").value;
    setGifsSugerido(buscar);
    setAutocompletar(false);
    setSugerencias([]);
    props.setLoading(true);
    document.getElementById("textoGifBuscar").value = "";
  };

  return (
    <div className="segundo-rectangulo">
      <div className="titulo">
        <h1>
          <span className="bold1">¡Inspírate y busca los mejores</span>{" "}
          <span className="bold"> GIFS </span>!
        </h1>
        <img src={ilustra_header} alt="ilustra_header" />

        <input
          type="text"
          className="buscar"
          id="textoGifBuscar"
          placeholder="Busca Gifs"
          value={textoBuscar}
          onChange={inputHandler}
        />

        <button className="lupa" onClick={buscarGiphos}>
          {" "}
          <img className="lupa2" src={icon_search} alt="buscador" />{" "}
        </button>
      </div>
      {autocompletar === true && sugerencias.length > 0 ? (
        <div className="autocompletacion">
          {sugerencias.map((sugerencia, idx) => {
            return (
              <p
                key={idx}
                onClick={sugerenciaHandler}
                className="autocompletacion-item"
              >
                {sugerencia.name}
              </p>
            );
          })}
        </div>
      ) : null}
      {props.error ? <Error /> : null}
    </div>
  );
}
