"use client"
import "@/styles/index.css"
import { useEffect } from "react"
import Image from "next/image"
import Header from "@/components/Header"


// export const metadata = {
//   title: 'Tesla',
//   description: `Tesla, Inc. is an American electric vehicle and clean 
//   energy company based in Palo Alto, California. Tesla's current products 
//   include electric cars, battery energy storage from home to grid-scale, 
//   solar panels and solar roof tiles, as well as other related products and services.`,  

// }


export default function Home() {

  useEffect(() => {
    const changeColor = document.querySelectorAll('.change-color')
    const paths = document.querySelectorAll('.change-color path')

    const hoverContent =`
      
      <div class="contItems">
        <div class="item">

          <Image src="/assets/accesorios-v.jpeg" alt="img" />
          <p>Accesorios para vehiculo</p>
        </div>
        <div class="item">
          <Image src="/assets/carga.jpeg" alt="img" />
          <p>Carga</p>
        </div>
        <div class="item" >
          <Image src="assets/ropa.png" alt="img" />
          <p>Ropa</p>
        </div>
        <div class="item">
          <Image src="/assets/estilo.jpeg" alt="img" />
          <p>Estilo de vida</p>
        </div>

      </div>



    `


    const hoverContainer = document.createElement('div')
    hoverContainer.classList.add('tienda')

    hoverContainer.innerHTML = hoverContent
    


    document.addEventListener('scroll', function () {
      if (window.scrollY < 500) {
        changeColor.forEach(element => {
          element.style.color = 'white'

        })
        paths.forEach(element => {
          element.style.fill = 'white'
        })
      }
      else if (window.scrollY > 600 && window.scrollY < 2500) {
        changeColor.forEach(element => {
          element.style.color = 'black'
        })
        paths.forEach(element => {
          element.style.fill = 'black'
        })

      }
      else if (window.scrollY < 3200 && window.scrollY > 2500) {
        changeColor.forEach(element => {
          element.style.color = 'white'
        })
        paths.forEach(element => {
          element.style.fill = 'white'
        })
      } else {
        changeColor.forEach(element => {
          element.style.color = 'black'
        })
        paths.forEach(element => {
          element.style.fill = 'black'
        })
      }

    })

    const header = document.querySelector('.header')
    const headerHover = document.querySelector('.contHeader')
    const tienditaHover = document.getElementById('tiendita')


    headerHover.addEventListener('mouseenter', () => {
      header.style.backgroundColor = 'white'
      tienditaHover.addEventListener('mouseenter', () => {
        headerHover.appendChild(hoverContainer)

      })





      changeColor.forEach(element => {
        element.style.color = 'black'

      })
      paths.forEach(element => {
        element.style.fill = 'black'
      })

    })


    headerHover.addEventListener('mouseleave', () => {
      header.style.backgroundColor = 'transparent'
      const existeTienda = document.querySelector('.contHeader .tienda')

      if (existeTienda) {
        existeTienda.remove()
      }


      if (window.scrollY < 500) {
        changeColor.forEach(element => {
          element.style.color = 'white'

        })
        paths.forEach(element => {
          element.style.fill = 'white'
        })
      }
      else if (window.scrollY > 600 && window.scrollY < 2500) {
        changeColor.forEach(element => {
          element.style.color = 'black'
        })
        paths.forEach(element => {
          element.style.fill = 'black'
        })

      }
      else if (window.scrollY < 3200 && window.scrollY > 2500) {
        changeColor.forEach(element => {
          element.style.color = 'white'
        })
        paths.forEach(element => {
          element.style.fill = 'white'
        })
      } else {
        changeColor.forEach(element => {
          element.style.color = 'black'
        })
        paths.forEach(element => {
          element.style.fill = 'black'
        })
      }
    })


  }, [])

  return (
    <main>
      <Header />

      
      <section className="section-1">

        <div className="contenedor-video" data-component-status="initialized">
          <video className="video1" preload="auto" playsInline="" data-autoplay-desktop="true"
            data-autoplay-portrait="true" data-autoplay-mobile="true" data-play-on-hover="false" muted={true} loop=""
            poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg"
            data-poster-desktop="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg"
            data-poster-portrait="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg"
            data-poster-mobile="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Mobile-Poster-NA.jpg"
            data-src-desktop="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4"
            data-src-portrait="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4"
            data-src-mobile="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Mobile-NA.mp4"
            data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4"
            data-object-fit="true"
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4"
            data-loaded="true" autoPlay={true}></video>
          <noscript>
            <video className="video1" preload="auto" playsInline="" data-autoplay-desktop="true"
              data-autoplay-portrait="true" data-autoplay-mobile="true" data-play-on-hover="false" muted={true}
              loop=""
              poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-Poster-NA.jpg"
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4"></video>
          </noscript>
        </div>
        <div className="texto-superpuesto">
          <div>

            <h1 className="titulo change-color">Model 3</h1>
            <h2 className="subtitulo "><a className="subtitulo change-color" href="">Explorar el inventario</a></h2>
          </div>

          <div className="contentedor-section-botones">
            <button className="boton-1">
              Ordenar
            </button>
            <button className="boton-2">
              Demostracion de manejo
            </button>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="texto-superpuesto">
          <div>
            <h1 className="titulo change-color">Model Y</h1>
            <h2 className="subtitulo "><a className="subtitulo change-color" href="">Agenda una demostracion de manejo</a></h2>
          </div>
          <div className="contentedor-section-botones">
            <button className="boton-1">
              Ordenar
            </button>
            <button className="boton-2">
              Demostracion de manejo
            </button>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="texto-superpuesto">
          <div>
            <h1 className="titulo change-color">Model S</h1>
            <h2 className="subtitulo "><a className="subtitulo change-color" href="">Agenda una demostracion de manejo</a></h2>
          </div>
          <div className="contentedor-section-botones">
            <button className="boton-1">
              Explorar inventario
            </button>
            <button className="boton-2">
              Orden personalizada
            </button>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="texto-superpuesto">
          <div>
            <h1 className="titulo change-color">Model X</h1>
            <h2 className="subtitulo "><a className="subtitulo change-color" href="">Agenda una demostracion de manejo</a></h2>
          </div>
          <div className="contentedor-section-botones">
            <button className="boton-1">
              Explorar inventario
            </button>
            <button className="boton-2">
              Orden personalizada
            </button>
          </div>
        </div>
      </section >
      <section className="section-5">
        {/* style div: style="--tcl-video-start-gradient-start: rgba(0, 0, 0, 1); --tcl-video-start-gradient-end: rgba(0, 0, 0, 0); --tcl-video-start-gradient-opacity: 0.5; --tcl-video-start-gradient-size: 30%;" */}
        <div className="contenedor-video"
          data-component-status="initialized">
          <video className="video2 " preload="auto" playsInline="" data-autoplay-desktop="true"
            data-autoplay-portrait="true" data-autoplay-mobile="true" data-play-on-hover="false" muted loop={true}
            poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
            data-poster-desktop="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
            data-poster-portrait="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
            data-poster-mobile="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Mobile-Poster-NA.jpg"
            data-src-desktop="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
            data-src-portrait="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
            data-src-mobile="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Mobile-NA.mp4"
            data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
            data-object-fit="true"
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
            data-loaded="true" autoPlay={true} ></video>
          <noscript>
            <video className="video2" preload="auto" playsInline="" data-autoplay-desktop={true}
              data-autoplay-portrait="true" data-autoplay-mobile="true" data-play-on-hover="false" muted 
              loop=""
              poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"></video>
          </noscript>
        </div>
        <div className="texto-superpuesto">
          {/* style: textalign: center; */}
          <div>
            <h1 className="titulo change-color">Vive la experiencia Tesla</h1>
            <h2 className="subtitulo "><a className="subtitulo change-color" href="">Explorar el inventario</a></h2>
          </div>
          <button className="boton-3">
            Demostracion de manejo
          </button>
        </div>
      </section>
      <section className="section-6">


        <div className="texto-superpuesto">
          <div>
            <h1 className="titulo">Energia solar y Powerwall</h1>
            {/* style: textalign: center; */}
            <h2 className="subtitulo"><a className="subtitulo" href="">Totalmente electrico</a></h2>
          </div>
          <div className="contentedor-section-botones">
            <button className="boton-2">
              Mas informacion
            </button>
          </div>
        </div>
      </section>
      <section className="section-7">
        <h1 className="titulo">Accesorios</h1>
        <div className="cont-foot-comprar">

          <button className="comprar-section-7">Compra ahora</button>
          <footer className="footer">
            <p>Testa &copy; 2023</p>
            <p>Privacidad y legal</p>
            <p>Llamadas a revision de vehiculos</p>
            <p>Contacto</p>
            <p>Noticias</p>
            <p>Ubicaciones</p>
          </footer>
        </div>
      </section>
    </main>
  )
}


