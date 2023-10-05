"use client"
import Playeras from "@/components/Playeras"
import Header from "@/components/Header"
import "@/styles/tienda.css"
import { useEffect, useState } from 'react'
import Sudaderas from "@/components/Sudaderas"

 
export default function page() {
    const [playeras, setPlayeras] = useState([])

    const [sudaderas, setSudaderas] = useState([])


    useEffect(() => {

             const obtenerProductos = async() => {
            const resultado = await fetch("/api/productos")

            const {productos} = await resultado.json()
            
            setPlayeras(...playeras, productos.playeras)
            setSudaderas(...sudaderas, productos.sudaderas)
       
        }
        obtenerProductos()

            const path = window.location.pathname;

            if (path === '/tienda') {
                const header = document.querySelector('.header');
                header.style.background = 'white';
            }


            const articuloSudaderas = document.querySelectorAll('.contSudaderas');

            articuloSudaderas.forEach( (articulo, i) => {
              articulo.addEventListener('mouseenter', () => {
                  const imagenArticulo = articulo.querySelector('.imagen-playera');
                  const botonProducto = articulo.querySelector('.botonProducto');
      
                  botonProducto.style.display = 'block';
      
                  
                  imagenArticulo.setAttribute('src', `src/img/playera-${i+1}.1.jpg`)
      
                 
                  imagenArticulo.style.boxShadow = '0px 5px 5px 0px rgba(0,0,0,0.2)'
              })
      
              articulo.addEventListener('mouseleave', () => {
                  const imagenArticulo = articulo.querySelector('.imagen-playera');
                  const botonProducto = articulo.querySelector('.botonProducto');
      
                  botonProducto.style.display = 'none';
                  imagenArticulo.setAttribute('src', `src/img/playera-${i+1}.jpg`)
                  imagenArticulo.style.boxShadow = '0px 0px 0px 0px '
      
      
      
              })
            })


    }, [])
    return (
        <>
            <Header />
            <main className="main-tienda">
                <h1>Hombres</h1>

                <section className="section1-hombres">
                    <h2>Playeras</h2>
                    <div className="contProductos" id="playeras">
                        {
                            playeras.length > 0 ? playeras.map(playera => (
                                <Playeras
                                key={playera.id}
                                    playera={playera}
                                />
                            )) : ( <h1>No hay productos</h1>)
                        }
                    </div>
                </section>

                <section className="section2-hombres">
                    <h2>Sudaderas y Sudaderas con Gorro</h2>
                    <div className="contProductos" id="sudaderas">
                        {
                            sudaderas.length > 0 ? sudaderas.map(sudadera => (
                                <Sudaderas
                                    key={sudadera.id}
                                    sudadera={sudadera}
                                />
                            )
                            ) : 
                            (<h1>No hay productos</h1>)
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
