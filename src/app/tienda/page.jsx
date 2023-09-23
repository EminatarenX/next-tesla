"use client"
import Playeras from "@/components/Playeras"
import Header from "@/components/Header"
import "@/styles/tienda.css"
import React, { useEffect, useState } from 'react'
import Sudaderas from "@/components/Sudaderas"

export const metadata = {
    title: "Tienda",
    description: "Tienda de Tesla",
}

export default function page() {
    const [playeras, setPlayeras] = useState([
        {
            id: 1,
            nombre: "Men's Plaid Quarter Mile Tee",
            precio: '$800',
            img1: '',
            img2: '',
        },
        {
            id: 2,
            nombre: "Playera Cybertruck Owl para Hombre",
            precio: '$800',
            img1: '',
            img2: '',
        },
        {
            id: 3,
            nombre: "Playera Para Hombre Let the Sun Shine",
            precio: '$800',
            img1: '',
            img2: '',
        },
        {
            id: 4,
            nombre: "Playera con Logo 3D T para Hombre",
            precio: '$700',
            img1: '',
            img2: '',
        },
        {
            id: 5,
            nombre: "Playera 3D Small Wordmark Para Hombre",
            precio: '$700',
            img1: '',
            img2: '',
        },
        {
            id: 6,
            nombre: "Playera Powerwall Para Hombre",
            precio: '$500',
            img1: '',
            img2: '',
        },
        {
            id: 7,
            nombre: "Playera Plaid Mode para Hombre",
            precio: '$500',
            img1: '',
            img2: '',
        },
        {
            id: 8,
            nombre: `Playera Cybertruck "A Prueba de Balas"`,
            precio: '$500',
            img1: '',
            img2: '',
        },
    ])

    const [sudaderas, setSudaderas] = useState([
        {
            id: 1,
            nombre: "Sudadera con Capucha y Cremallera Completa Chill para Hombre",
            precio: '$1,900',
            img1: '',
            img2: '',
        },
        {
            id: 2,
            nombre: "Sudadera con Cierre Chill Quarter para Hombre",
            precio: '$1,500',
            img1: '',
            img2: '',
        },
        {
            id: 3,
            nombre: "Sudadera Unisex con Capucha 3D Large Wordmark",
            precio: '$1,700',
            img1: '',
            img2: '',
        },
        {
            id: 4,
            nombre: "Chamarra Corp para Hombre",
            precio: '$2,000',
            img1: '',
            img2: '',
        },

    ])
    useEffect(() => {
            const path = window.location.pathname;

            if (path === '/tienda') {
                const header = document.querySelector('.header');
                header.style.background = 'white';
            }


            const articuloSudaderas = document.querySelectorAll('.contSudaderas');

            articuloSudaderas.forEach((articulo, i) => {
                articulo.addEventListener('mouseenter', () => {
                    const imagenArticulo = articulo.querySelector('.imagen-playera');
                    const botonProducto = articulo.querySelector('.botonProducto');

                    botonProducto.style.display = 'block';


                    imagenArticulo.setAttribute('src', `/assets/playera-${i + 1}.1.jpg`)


                    imagenArticulo.style.boxShadow = '0px 5px 5px 0px rgba(0,0,0,0.2)'
                })

                articulo.addEventListener('mouseleave', () => {
                    const imagenArticulo = articulo.querySelector('.imagen-playera');
                    const botonProducto = articulo.querySelector('.botonProducto');

                    botonProducto.style.display = 'none';
                    imagenArticulo.setAttribute('src', `/assets/playera-${i + 1}.jpg`)
                    imagenArticulo.style.boxShadow = '0px 0px 0px 0px '



                })
            })


    }, [])
    return (
        <>
            <Header />
            <main class="main-tienda">
                <h1>Hombres</h1>

                <section class="section1-hombres">
                    <h2>Playeras</h2>
                    <div class="contProductos" id="playeras">
                        {
                            playeras.map(playera => (
                                <Playeras
                                    playera={playera}
                                />
                            ))
                        }
                    </div>
                </section>

                <section class="section2-hombres">
                    <h2>Sudaderas y Sudaderas con Gorro</h2>
                    <div class="contProductos" id="sudaderas">
                        {
                            sudaderas.map(sudadera => (
                                <Sudaderas
                                    sudadera={sudadera}
                                />
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
