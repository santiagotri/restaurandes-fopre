import React from 'react';
import { ReactComponent as LogoRestaurandes } from './assets/logo_restaurandes.svg';

function NavBar(){
      return <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <LogoRestaurandes style={{maxHeight:40, maxWidth:60}}></LogoRestaurandes>
      Fopre Café
    </a>
    <button style={{borderColor:"yellow"}}className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Restaurantes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">¿Qué es Fopre Café?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">¿Qué es Fopre?</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menú
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>;
  }

export default NavBar;