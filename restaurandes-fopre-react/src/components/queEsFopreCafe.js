import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function QueEsFopreCafe() {
  return (
    <div>
      <script async src="https://api.countapi.xyz/hit/restaurandes/84492a00-81af-4664-9aee-3ef52a03dcac?callback=websiteVisits"></script>
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
          <Card.Title className="h4 text-center">
            En RestaurAndes es nuestra semana favorita 😍
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Img
            variant="top"
            alt="Imagen Fopre café"
            className="img-fluid rounded mx-auto d-block"
            src="https://uniandes.edu.co/sites/default/files/fopre-cafe-2022-09_0.jpg"
          ></Card.Img>
          <Card.Text>
            En resumen: Es una semana en la que van a encontrar ✨tremendos✨
            restaurantes dentro del campus
            <hr></hr>
            Después de 2 años regresa el Fopre Café. 😎
            <br></br>
            <br></br>
            Fopre café es un festival Gastronómico de la Universidad de los
            Andes y tiene como objetivo recaudar recursos para apoyar a
            estudiantes de pregrado que no cuentan con los medios económicos
            para su sostenimiento durante la época de estudios.
            <br></br>
            <br></br>
            Del 5 al 9 de septiembre de 2022, la comunidad uniandina podrá
            disfrutar de una amplia oferta gastronómica y a la vez aportar para
            su comunidad.
          </Card.Text>
          <Button
            className="mx-auto d-block"
            variant="secondary"
            href="/queesfopre"
          >
            ¿Qué es el fondo Fopre?
          </Button>
          <br></br>
          <Button
            className="mx-auto d-block"
            variant="secondary"
            href="/mediosdepago"
          >
            ¿Cómo puedo pagar?
          </Button>
          <br></br>
          <Button className="mx-auto d-block" variant="secondary" href="/">
            ¿Qué restaurantes puedo encontrar?
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QueEsFopreCafe;
