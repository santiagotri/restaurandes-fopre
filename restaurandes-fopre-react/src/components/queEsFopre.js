import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function QueEsFopre() {
  return (
    <div>
      {contarPaginaVisitada()}
      <Card
        text="white"
        bg="dark"
        border="dark"
        style={{
          marginTop: 20,
          marginRight: 40,
          marginLeft: 40,
          marginBottom: 20,
        }}
      >
        <Card.Header>
          <Card.Title>
            Fopre es un fondo para apoyarnos como comunidad.
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Img
            variant="top"
            alt=""
            className="img-fluid rounded mx-auto d-block"
            src="https://pbs.twimg.com/media/DG-WL5VXgAAYgjF.jpg"
          ></Card.Img>

          <Card.Text>
            Es destinado a estudiantes con becas internas y/o préstamos, con
            resultados académicos excelentes, que no tengan los recursos
            económicos suficientes. Subsidia:
            <div>
              <ul>
                <li>Fotocopias</li>
                <li>Transporte</li>
                <li>Alimentación</li>
                <li>Materiales (si es el caso)</li>
              </ul>
            </div>
            Los dineros del Fondo son aportados por la Universidad y por
            miembros de la comunidad Uniandina.
          </Card.Text>
          <Button
            className="mx-auto d-block"
            variant="secondary"
            href="/queesfoprecafe"
          >
            ¿Qué es el Fopre Café?
          </Button>
        </Card.Body>
      </Card>
    </div>
  );

  function contarPaginaVisitada(){
    const url="https://api.countapi.xyz/hit/restaurandes/a5a406bf-cabe-42a6-b745-d775c807320a";
    fetch(url);
  }
}

export default QueEsFopre;
