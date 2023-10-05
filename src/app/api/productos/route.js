import { NextResponse } from "next/server"


export function GET () {
   
    return NextResponse.json({
        productos : {
            playeras,
            sudaderas
        }
    })
}

const playeras = [
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
]

const sudaderas = [
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

]