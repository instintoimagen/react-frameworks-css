import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://sergioortega.com.ar/assets/perfil.jpg"
            alt="Sergio Ortega"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://sergioortega.com.ar/assets/icono-code-48.png"
                alt="Code"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Sergio Ortega</p>
            <p className="subtitle is-6">@sergio.instintoimagen</p>
          </div>
        </div>

        <div className="content">
          Desarrollador Front-End, Director de programas, Licenciado en Cine y
          Tv. Fotógrafo profestional. <br /> Ver Instagram:{" "}
          <a
            href="https://sergioortega.com.ar"
            target={"_blank"}
            rel={"noreferrer"}
          >
            @sergio.instintoimagen
          </a>
          <br />
          <time dateTime="2022-7-6">6 de Julio de 2022 - 15:55</time>
        </div>
      </div>
    </div>
  );
}

export default function Bulma() {
  return (
    <>
      <h2>Bulma</h2>
      <Card />
    </>
  );
}
