import Libro from "../components/Libro";
import NavBar from "../components/NavBar";
import "../App.css";
import Libreria from "../components/Libreria";
import Carousel from "../components/Carousel";
import Añadir from "../components/Añadir";
import { useEffect} from "react"
import { obtener_libros } from "../services";
export default function Index() {

  useEffect(()=>{
    (async()=>{
      const res = await obtener_libros()
      console.log(res)

    })()

  },[])
  return (
    <>
      <NavBar></NavBar>
      <Añadir></Añadir>
      <hr></hr>
      <Libreria></Libreria>
    </>
  );
}
