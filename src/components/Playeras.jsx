import Image from "next/image"

export default function Playeras({playera}) {

  return (
    <article class="contSudaderas" id={`playera-${playera.id}`}>
    <div class="contImagenPlayera">
        <img class="imagen-playera" src={`/assets/playera-${playera.id}.jpg`} alt={`playera-${playera.id}`}/>
        <button class="botonProducto">
            Adicion Rapida +
        </button>
    </div>
    <p>{playera.nombre}</p>
    <p>${playera.precio}</p>
  </article>
  )
}
