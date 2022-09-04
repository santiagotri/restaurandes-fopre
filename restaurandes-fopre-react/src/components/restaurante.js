import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Restaurante(props) {
  const nombre = props.nombre;
  const descripcion = props.descripcion;
  const id = props.id;
  const imagen = props.imagen;
  const menu = props.menu;
  return (
    <div>
      <Col>
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
            <h1>{nombre}</h1>
          </Card.Header>
          <Card.Body>
            {
              insertarImagen()
            }
            <Card.Title></Card.Title>
            <Card.Text>{descripcion}</Card.Text>

          {
            botonMenu()
          }
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
  function botonMenu(){
    if(menu.length!==0){
      return(
        <Button className="mx-auto d-block" href={"/restaurante/" + id} variant="secondary">
        Ver menú
      </Button>
      )
    }
  }
  function insertarImagen(){
    if(imagen!==""){
      return(
        <Card.Img
              variant="top"
              alt={"logo-" + nombre}
              className="img-fluid rounded mx-auto d-block"
              src={imagen}
              style={{ maxWidth: 150 }}
            ></Card.Img>
      )
    }else{
      return <div></div>
    }
  }
}

export default Restaurante;
