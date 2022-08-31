import React from "react";
import Restaurante from "./restaurante";
import Row from 'react-bootstrap/Row';
import restaurantes from "./assets/restaurantes.json"

function Restaurantes() {
  return (
    <div>
    <Row xs={1} md={2} className="g-4">
    {restaurantes.restaurantes.map(item=>(
      <Restaurante nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} key={item.id}></Restaurante>
    ))}
  </Row>
    </div>
  );
}

export default Restaurantes;
