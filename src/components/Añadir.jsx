import { useState } from "react";
import { crear_libros } from "../services/index";
export default function Añadir() {
  const [titulo, changeTitulo] = useState();
  const [descripcion, changeDescripcion] = useState();
  const [caratula, changeCaratula] = useState();

  const changeT = (e) => {
    changeTitulo(e.target.value)
  };
  const changeD = (e) => {
    changeDescripcion(e.target.value)
  };
  const changeC = (e) => {
    console.log(e.target.files[0])
    changeCaratula(e.target.files[0])
  };
  const enviar = async () => {
    const data = new FormData();
    data.append("titulo", titulo)
    data.append("descripcion", descripcion)
    data.append("caratula", caratula)
    const res = await crear_libros(data)
    window.location.reload(false);
  };
  return (
    <>
      <form onSubmit={enviar}>
        <h3 className="text-center">Añadir Nuevo Libro</h3>
        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <label htmlFor="middle-label" className="text-right middle">
              Titulo
            </label>
          </div>
          <div className="small-6 cell">
            <input
              type="text"
              id="middle-label"
              placeholder="Right- and middle-aligned text input"
              onChange={changeT}
              required
            />
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <label htmlFor="middle-label" className="text-right middle">
              Descripcion
            </label>
          </div>
          <div className="small-6 cell">
            <input
              type="text"
              id="middle-label"
              placeholder="Right- and middle-aligned text input"
              onChange={changeD}
              required
            />
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="small-3 cell text-center align-center">
            <label htmlFor="middle-label" className="text-right middle">
              Caratula
            </label>
          </div>
          <div className="small-6 cell text-center align-center">
            <label
              htmlFor="exampleFileUpload"
              className="button margin-horizontal-0  small-5 cell"
            >
              Upload File
            </label>
            <input
              type="file"
              id="exampleFileUpload"
              className="show-for-sr"
              onChange={changeC}
              required
            />
          </div>
        </div>
        <div className="grid-x grid-padding-x text-center align-center">
          <button
            className="text-center margin-horizontal-3 align-center success button"
            type="submit"
            data-tooltip
            tabIndex="1"
            title="Los datos seran enviados al servidor."
            data-position="top"
            data-alignment="left"
          >
            Guardar
          </button>
        </div>
        <hr></hr>
      </form>
    </>
  );
}
