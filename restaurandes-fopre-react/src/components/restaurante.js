import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Restaurante(props) {
  const nombre = props.nombre;
  const descripcion = props.descripcion;
  const id = props.id;
  const imagen = props.imagen;
  return (
    <div>
    <Col>
          <Card text="white" bg="dark" border="dark" style={{marginTop:20, marginRight:40, marginLeft:40, marginBottom:20}}>
              <Card.Header><h1>{nombre}</h1></Card.Header>
            <Card.Body>
            <Card.Img variant="top" alt={"logo-"+nombre} class="img-fluid rounded mx-auto d-block" src={imagen} style={{maxHeight:80}}></Card.Img>
              <Card.Title></Card.Title>
              <Card.Text>
              {descripcion}
              </Card.Text>
            </Card.Body>
            <Button href={"/restaurante/"+id} variant="secondary" size="sm">Ver menú</Button>
          </Card>

        </Col>
    </div>
  );
}

export default Restaurante;
