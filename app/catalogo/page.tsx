"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const woodTypes = [
  {
    name: "Madera de Pino",
    description: "Maderas blandas ideales para construcción y carpintería general",
    uses: ["construcción", "carpintería", "carpintería"],
    image: "/maderaPino.jpg",
  },
  {
    name: "Madera de Roble",
    description: "Maderas dura de alta calidad, perfecta para muebles premium",
    uses: ["mueblería", "decoración", "decoración"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Madera de Cedro",
    description: "Maderas aromática, resistente a insectos y ideal para exteriores",
    uses: ["exteriores", "closets", "revestimiento"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Madera de Eucalipto",
    description: "Maderas versátil y económica para múltiples aplicaciones",
    uses: ["construcción", "pallets", "postes"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Madera de Nogal",
    description: "Maderas noble con vetas únicas, perfecta para muebles de lujo",
    uses: ["muebles", "instrumentos", "arte"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Madera de Caoba",
    description: "Maderas tropical de gran belleza y durabilidad excepcional",
    uses: ["muebles de lujo", "decoración", "decoración"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CatalogoPage() {
  const [search, setSearch] = useState("")
  const filteredWoods = woodTypes.filter(wood =>
    wood.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="min-h-screen bg-[#efefef] py-16">
      {/* Botón para volver a la página principal */}
      <div className="fixed top-6 left-6 z-40">
        <a href="/">
          <Button className="bg-[#211007] hover:bg-[#000000] text-white rounded-full shadow-lg">
            ← Volver al inicio
          </Button>
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#211007] mb-4">Catálogo completo de maderas</h2>
          <p className="text-lg text-[#211007]">
            Explora todas nuestras opciones de maderas nacionales e importadas, listas para tu proyecto.
          </p>
        </div>
        {/* Filtro de búsqueda */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Buscar madera..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-[#bea99f] rounded focus:outline-none focus:ring-2 focus:ring-[#bea99f]"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWoods.length === 0 ? (
            <div className="col-span-full text-center text-[#211007] text-lg">No se encontraron maderas.</div>
          ) : (
            filteredWoods.map((wood, index) => (
              <div
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-visible cursor-pointer md:relative"
                style={{ minHeight: undefined, height: undefined }}
              >
                {/* Imagen SIEMPRE visible */}
                <div className="aspect-video relative">
                  <Image
                    src={wood.image || "/placeholder.svg"}
                    alt={wood.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                {/* Título siempre visible */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#211007] mb-2">{wood.name}</h4>
                  {/* Detalles solo en móvil */}
                  <div className="md:hidden">
                    <p className="text-[#211007] mb-4 text-sm">{wood.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#211007] mb-2">Usos principales:</p>
                      <div className="flex flex-wrap gap-2">
                        {wood.uses.map((use, useIndex) => (
                          <span key={useIndex} className="bg-[#f4f4f4] text-[#211007] px-2 py-1 rounded text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href="/#contacto">
                      <Button className="w-full bg-[#211007] hover:bg-[#000000] text-white mt-auto">Solicitar información</Button>
                    </a>
                  </div>
                </div>
                {/* Detalles SOLO en hover en escritorio */}
                <div
                  className="hidden md:flex md:absolute md:left-0 md:top-0 md:w-full md:h-full bg-white rounded-lg p-6 z-10 flex-col justify-center shadow-2xl transition-all duration-300
                  md:opacity-0 md:scale-95 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-105 md:group-hover:pointer-events-auto"
                  style={{ minHeight: '320px', height: '320px' }}
                >
                  <h4 className="text-xl font-bold text-[#211007] mb-2">{wood.name}</h4>
                  <p className="text-[#211007] mb-4 text-sm">{wood.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#211007] mb-2">Usos principales:</p>
                    <div className="flex flex-wrap gap-2">
                      {wood.uses.map((use, useIndex) => (
                        <span key={useIndex} className="bg-[#f4f4f4] text-[#211007] px-2 py-1 rounded text-xs">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="/#contacto">
                    <Button className="w-full bg-[#211007] hover:bg-[#000000] text-white mt-auto">Solicitar información</Button>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  )
} 