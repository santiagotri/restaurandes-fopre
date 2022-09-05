import React from "react";

function Menu(props) {
  const id = props.id;
  const nombre = props.nombre;
  const menu = props.menu;
  return (
    <div>
      {contarPaginaVisitada()}
      <h1 class="text-center"> Menú - {nombre}</h1>
      {menu.map((item)=>(
        <img className="img-fluid" alt={"menu-"+id+nombre} src={item}></img>
      ))}
    </div>
  );
  function contarPaginaVisitada(){
    const url="https://api.countapi.xyz/hit/restaurandes/3bfb8bc1-7aa3-4778-ba7e-2905ef718ace";
    fetch(url);
  }
}

export default Menu;
