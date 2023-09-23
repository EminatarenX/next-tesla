export const hoverContent = `
<div class="contItems">
    <div class="item">
    <img src="src/img/accesorios-v.jpeg" alt="img">
    <p>Accesorios para vehiculo</p>
    </div>
    <div class="item">
    <img src="src/img/carga.jpeg" alt="img">
    <p>Carga</p>
    </div>
    <div class="item" onclick="goTiendita()">
    <img src="src/img/ropa.png" alt="img">
    <p>Ropa</p>
    </div>
    <div class="item">
    <img src="src/img/estilo.jpeg" alt="img">
    <p>Estilo de vida</p>
    </div>

</div>

      

`

export const changeColor = document.querySelectorAll('.change-color')
export const paths = document.querySelectorAll('.change-color path')


export const hoverContainer = document.createElement('div')

export const header = document.querySelector('.header')
export const headerHover = document.querySelector('.contHeader')
export const tienditaHover = document.getElementById('tiendita')