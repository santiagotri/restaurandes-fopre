import React from "react";
import Restaurante from "./restaurante";
import Row from 'react-bootstrap/Row';
import restaurantes from "./assets/restaurantes.json";

function Restaurantes() {
  return (
    <div>
      {contarPaginaVisitada()}
    <Row xs={1} md={2} className="g-4">
    {restaurantes.restaurantes.map(item=>(
      <Restaurante nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} id={item.id} key={item.id} menu={item.menu}></Restaurante>
    ))}
  </Row>
    </div>
  );
  function contarPaginaVisitada(){
    const url="https://api.countapi.xyz/hit/restaurandes/92423a32-b124-43d2-8a06-b17888348664";
    fetch(url);
  }
}

export default Restaurantes;
