import React from "react";
import "../css/footer.css";
import Error from "./error";
import Loading from "./loading";

export default function Footer(props) {
  return (
    <div>
      <div className="tercer-rectangulo">
        {props.loading === true ? (
          <Loading />
        ) : props.giphos.length === 0 ? (
          <Error />
        ) : (
          <>
            <h1 className="subtitulo">Resultados de la búsqueda</h1>
            <div className="gifs">
              {props.giphos.length > 0
                ? props.giphos.map((gipho, idx) => {
                    return <GiphoCard key={idx} gipho={gipho} />;
                  })
                : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function GiphoCard(props) {
  return (
    <div className="gifCard">
      <a href={props.gipho.url} target="_blank" rel="">
        <img
          src={props.gipho.images.downsized_medium.url}
          alt={props.gipho.title}
          height="100%"
          width="100%"
        />
      </a>
    </div>
  );
}
