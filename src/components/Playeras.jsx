import Image from "next/image"

export default function Playeras({playera}) {

  return (
    <article className="contSudaderas" id={`playera-${playera.id}`}>
    <div className="contImagenPlayera">
        <img className="imagen-playera" src={`/assets/playera-${playera.id}.jpg`} alt={`playera-${playera.id}`}/>
        <button className="botonProducto">
            Adicion Rapida +
        </button>
    </div>
    <p>{playera.nombre}</p>
    <p>${playera.precio}</p>
  </article>
  )
}
