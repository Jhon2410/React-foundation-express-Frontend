import axios from "axios";

const base_url = "http://localhost:5000"

// Obtener libros
const obtener_libros = ()=>{
    return "Libros obtenido"    
}

// Crear libros
const crear_libros = async(body)=>{
    console.log(body.get("caratula"))
    const data = await axios.post(base_url+ "/biblioteca/crear", {body});
    return  data;   
}

// Eliminar libros
const eliminar_libros = ()=>{
    return "Libros obtenido"    
}

// Actualizar libros
const actualizar_libros = ()=>{
    return "Libros obtenido"    
}

export {obtener_libros, crear_libros, eliminar_libros, actualizar_libros }