import React from "react";
import menus from "./assets/menus.json";

function Menu(props) {
    const id = props.id;
    const nombre = props.nombre;
  return (
    <div>
        <h1 class="text-center"> Menú - {nombre}</h1>
        {console.log(menus)}
    </div>
  );
}

export default Menu;
