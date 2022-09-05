import React from "react";
import { ReactComponent as LogoRestaurandes } from "./assets/logo_restaurandes.svg";
import restaurantes from "./assets/restaurantes.json";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <LogoRestaurandes
              style={{ maxHeight: 40, maxWidth: 60 }}
            ></LogoRestaurandes>
            Fopre Café
          </a>
          <button
            style={{ borderColor: "yellow" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Restaurantes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/mediosdepago">
                  Medios de pago
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/queesfoprecafe">
                  ¿Qué es Fopre Café?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/queesfopre">
                  ¿Qué es Fopre?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mapa">
                  Mapa
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menú
                </a>

                <ul className="dropdown-menu">
                  {restaurantes.restaurantes.map((item) => {
                    if(item.menu.length!==0) return (
                    <li key={"lista"+item.id}>
                    <a key={"boton"+item.id} className="dropdown-item" href={"/restaurante/"+item.id}>
                      {item.nombre}
                    </a>
                  </li>)
                  else{
                    return <div key={"lista"+item.id}></div>
                  }
                  } 
                  )}
                  <li>
                      <p className="text-center text-muted">Estamos trabajando a lo largo de la semana FOPRE para tener más menús 👷🏻‍♂️🔨</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
