import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MediosDePago(props) {
  const urlcoink =
    "https://coink.com/referidos.html?referencedBy=b53be174-c452-4862-96eb-78ca79b2975f";
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
          <h1>Coink</h1>
        </Card.Header>
        <Card.Body>
          <Card.Img
            onClick={descargarCoink}
            variant="top"
            alt="logo-coink"
            class="img-fluid rounded mx-auto d-block"
            src="https://coink.com/wp-content/uploads/2021/09/Haz-crecer-tu-marrano.svg"
            style={{ maxHeight: 120 }}
          ></Card.Img>
          <Card.Title></Card.Title>
          <Card.Text>
            Para facilitar tus compras, reducir las filas y agilizar los tiempos
            de atención, en esta nueva edición no se usarán los billetes Fopre.
            <br></br>
            <br></br>
            Ahora podrás realizar tus compras a través de los métodos de pago
            que tenga cada restaurante y usando la tarjeta débito Coink VISA de
            la aplicación Coink, la cual será muy fácil de obtener durante el
            Fopre Café acercándote a la alcancía gigante que estará en la
            plazoleta Lleras.
            <br></br>
            <br></br>
            Descarga la app Coink, Regístrate en menos de 3 minutos.
            <br></br>
            <br></br>
            <Button
              onClick={descargarCoink}
              className="mx-auto d-block"
              variant="success"
              size="lg"
            >
              ¡Descargar Coink!
            </Button>
            <br></br>
            En la semana del Fopre Café acércate al punto principal de Coink en
            la plazoleta Lleras, allí podrás obtener tu tarjeta débito Coink
            VISA gratis e inmediato.
            <br></br>
            <br></br>
            Cuando ya tengas dinero en tu cuenta de Coink y hayas activado tu
            tarjeta, podrás hacer tus pagos en cualquier datáfono y obtener el
            5% de cashback de las compras que hagas en los restaurantes aliados
            del Fopre Café.
          </Card.Text>
        </Card.Body>
      </Card>
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
          <h1>Otros medios de pago</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Los restaurantes aceptan otros medios de pago, acercate a cada uno
            de ellos para saber cuales son.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
  function contarPaginaVisitada(){
    const url="https://api.countapi.xyz/hit/restaurandes/fcbf8e2f-b030-405a-aac0-86417e272195";
    fetch(url);
  }
  function descargarCoink(){
    const url="https://api.countapi.xyz/hit/restaurandes/41845167-a435-4d1b-880c-05f569034e99";
    fetch(url).then(()=>{
      window.location.href = urlcoink;
    });
  }
}

export default MediosDePago;
