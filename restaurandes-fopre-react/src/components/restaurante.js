import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Restaurante() {
  return (
    <div>
    <Col>
          <Card text="white" bg="secondary" border="light" style={{marginTop:20, marginRight:40, marginLeft:40, marginBottom:20}}>
              <Card.Header><h1>Crepes & Waffles</h1></Card.Header>
            <Card.Body>
            <Card.Img variant="top" src="https://www.mambogota.com/wp-content/uploads/2018/05/logo-Crepes-Waffles-01.png" />
              <Card.Title>La vieja confiable</Card.Title>
              <Card.Text>
              Crepes & Waffles es una cadena de restaurantes colombiana creada en 1980 en la ciudad de Bogotá por dos estudiantes del Colegio de Estudios Superiores de Administración.​
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
    </div>
  );
}

export default Restaurante;
