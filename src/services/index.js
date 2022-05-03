import axios from "axios";

const base_url = "http://localhost:5000"

// Obtener libros
const obtener_libros = async()=>{
    const data = await axios.get(base_url+ "/biblioteca/");
    console.log(data.data)
    return  data.data;  
    
}

// Crear libros
const crear_libros = async(body)=>{
    const data = await axios.post(base_url+ "/biblioteca/crear", body);
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