export default function Añadir() {
  return (
    <>
      <form>
        <h3 className="text-center">Añadir Nuevo Libro</h3>
        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <label for="middle-label" className="text-right middle">
              Titulo
            </label>
          </div>
          <div className="small-6 cell">
            <input
              type="text"
              id="middle-label"
              placeholder="Right- and middle-aligned text input"
            />
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <label for="middle-label" className="text-right middle">
              Descripcion
            </label>
          </div>
          <div className="small-6 cell">
            <input
              type="text"
              id="middle-label"
              placeholder="Right- and middle-aligned text input"
            />
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="small-3 cell text-center align-center">
            <label for="middle-label" className="text-right middle">
              Caratula
            </label>
          </div>
          <div className="small-6 cell text-center align-center">
            <label
              for="exampleFileUpload"
              className="button margin-horizontal-0  small-5 cell"
            >
              Upload File
            </label>
            <input type="file" id="exampleFileUpload" className="show-for-sr" />
          </div>
        </div>
        <div className="grid-x grid-padding-x text-center align-center">
          <button
            className="text-center margin-horizontal-3 align-center success button"
            type="button"
            data-tooltip
            tabindex="1"
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
