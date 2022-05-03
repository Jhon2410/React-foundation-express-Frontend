import Libro from "../components/Libro";
import NavBar from "../components/NavBar";
import "../App.css";
import Libreria from "../components/Libreria";
import Carousel from "../components/Carousel";
import Añadir from "../components/Añadir";
import { useState, useEffect} from "react"
import { obtener_libros } from "../services";
export default function Index() {
  const [libros, changeLibros] = useState([]);
  useEffect(()=>{
    (async()=>{
      const res = await obtener_libros()
      changeLibros(res.respuesta.reverse());
    })()
  },[])
  return (
    <>
      <NavBar></NavBar>
      <Añadir></Añadir>
      <hr></hr>
      <Libreria props = {libros}></Libreria>
    </>
  );
}
