import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Restaurantes from "./components/restaurantes";
import QueEsFopre from "./components/queEsFopre";
import QueEsFopreCafe from "./components/queEsFopreCafe";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Restaurantes />} />
        <Route path="queesfopre" element={<QueEsFopre />} />
        <Route path="queesfoprecafe" element={<QueEsFopreCafe />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
