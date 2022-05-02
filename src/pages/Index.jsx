import Libro from "../components/Libro";
import NavBar from "../components/NavBar";
import "../App.css";
import Libreria from "../components/Libreria";
import Carousel from "../components/Carousel";
import Añadir from "../components/Añadir";

export default function Index() {
  return (
    <>
      <NavBar></NavBar>
      <Añadir></Añadir>
      <hr></hr>
      <Libreria></Libreria>
    </>
  );
}
