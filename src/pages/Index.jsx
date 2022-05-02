import Libro from "../components/Libro";
import NavBar from "../components/NavBar";
import '../App.css'
import Libreria from "../components/Libreria";
import Carousel from "../components/Carousel";

export default function Index (){
    return(
        <>
        <NavBar></NavBar>

        <hr></hr>
        <Libreria></Libreria>
        </>
    )
}