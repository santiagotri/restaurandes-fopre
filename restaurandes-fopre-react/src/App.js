import logo from "./logo.svg";import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Restaurantes from "./components/restaurantes";
import QueEsFopre from "./components/queEsFopre";
import QueEsFopreCafe from "./components/queEsFopreCafe";
import restaurantes from "./components/assets/restaurantes.json";
import Menu from "./components/menu";
import MediosDePago from "./components/mediosdepago";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Restaurantes />} />
        <Route path="queesfopre" element={<QueEsFopre />} />
        <Route path="queesfoprecafe" element={<QueEsFopreCafe />} />
        <Route path="mediosdepago" element={<MediosDePago />} />
        {restaurantes.restaurantes.map((item) => (
          <Route
            key={"ruta" + item.id}
            path={"restaurante/" + item.id}
            element={
              <Menu
                nombre={item.nombre}
                id={item.id}
                key={"menu" + item.id}
                menu={item.menu}
              ></Menu>
            }
          />
        ))}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
