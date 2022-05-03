import { getBaseUrl } from "../services";


export default function Libro({props}) {
  return (
    <div className="cell">
      <div className="card text-center">
      <img src={getBaseUrl() +"/img/"+ props.caratula} />
        {props.caratula}
        <div className="card-section">
          <h4>{props.titulo}</h4>
          <p>{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
