import Libro from "./Libro";

export default function Libreria({props}) {
  const renderLibros = props.map((libro)=>{
      return(
        <Libro props={libro}></Libro>
      )
   
  })

  return (
    <>
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {props.length === 0 ? <h5 className="text-center" >No hay ningun libro disponible.</h5> :  renderLibros}
        </div>
      </div>
  
    </>
  );
}
