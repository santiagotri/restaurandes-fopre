import React from "react";

function Menu(props) {
  const id = props.id;
  const nombre = props.nombre;
  const menu = props.menu;
  return (
    <div>
      <h1 class="text-center"> Menú - {nombre}</h1>
      {menu.map((item)=>(
        <img className="img-fluid" alt={"menu-"+id+nombre} src={item}></img>
      ))}
    </div>
  );
}

export default Menu;
