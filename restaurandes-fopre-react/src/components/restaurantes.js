import React from "react";
import { ReactComponent as LogoRestaurandes } from "./assets/logo_restaurandes.svg";
import Restaurante from "./restaurante";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Restaurantes() {
  return (
    <div>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Restaurante></Restaurante>
    ))}
  </Row>
    </div>
  );
}

export default Restaurantes;
