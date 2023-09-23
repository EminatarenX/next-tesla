import React from 'react'

export default function Sudaderas({sudadera}) {
  return (
    <article id={`sudadera-${sudadera.id}`}>
    <div>
      <img class="imagen-playera" src={`assets/sudadera-${sudadera.id}.jpg`} alt="sudadera-${sudadera.id}"/>

    </div>
    <p>{sudadera.nombre}</p>
    <p>${sudadera.precio}</p>
  </article>
  )
}
