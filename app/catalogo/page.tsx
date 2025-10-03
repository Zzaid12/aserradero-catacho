"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

function AutoCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [api, setApi] = useState<any>(null)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="">
      <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i} className="relative aspect-video">
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover rounded-t-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const woodTypes = [
  {
    name: "Estacas de madera de castaño",
    description: "Estacas de alta calidad perfectas para ceramientos. Disponibles en varias medidas según tus necesidades",
    uses: ["cerramientos", "cultivos", "jardinería", "soportes"],
    image: "/estacas-cerramiento.png",
  },
  {
    name: "Estacas de topógrafos",
    description: "Estacas profesionales para trabajos de topografía y medición. Resistentes y duraderas",
    uses: ["topografía", "medición", "construcción", "delimitación"],
    image: "/estacas-topografico.png",
  },
  {
    name: "Cinta de chopo y aliso",
    description: "Cinta de madera natural ideal para secaderos y estructuras ligeras",
    uses: ["secadero de pimientos", "estructuras", "revestimientos"],
    image: "/secadero.png",
  },
  {
    name: "Tarima de abeto",
    description: "Tarima de abeto de alta calidad para tejados y porches. Resistente a la intemperie",
    uses: ["tejados", "porches", "cubiertas"],
    image: "/tarima-abeto.png",
  },
  {
    name: "Serrín",
    description: "Serrín de calidad disponible en sacos o a granel (por toneladas). Ideal para múltiples usos",
    uses: ["cama de animales", "artesanía", "industria", "otros usos"],
    images: ["/serrin-sacos.png", "serrin-granel.png",],
  },
  {
    name: "Tablones de castaño en rústico",
    description: "Tablones naturales con acabado rústico. Perfectos para proyectos decorativos",
    uses: ["encimeras", "mesas", "decoración", "muebles"],
    images: [
      "/madera-castano-encimeras.png",
      "/madera-castano.png",
    ],
  },
  {
    name: "Rastrel de pino y chopo",
    description: "Rastrel de pino y chopo para embalaje y construcción. Resistente y versátil",
    uses: ["embalaje", "construcción", "estructuras"],
    image: "/rastrel-pino.png",
  },
  {
    name: "Ripia de pino y castaño",
    description: "Ripia tradicional de pino y castaño para tejados y cubiertas. Alta durabilidad ",
    uses: ["tejados", "cubiertas", "construcción", "varios usos"],
    images: [
      "/ripia-pino-castano.png", 
      "/ripia-pino-castano2.png",
    ],
  },
  {
    name: "Leña de roble y encina",
    description: "Leña seleccionada de roble y encina con gran poder calorífico",
    uses: ["chimenea", "caset", "panadería"],
    image: "/lena-roble.png",
  },
  {
    name: "Vigas y cuartones de castaño o cedro",
    description: "Vigas macizas de castaño o cedro para estructura y exterior",
    uses: ["tejados" ,"porches", "construcción"],
    images: [
      "/vigas1.png", 
      "/vigas2.png",
      "/madera-castano-tejado.png",
    ],
  },
  {
    name: "Tablas y tablones de pino",
    description: "Tablas y tablones de pino para estructuras y carpintería",
    uses: ["para enconfrar", "otros usos"],
    image: "/cuartones.png",
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
          <h2 className="text-4xl font-bold text-[#211007] mb-4">Catálogo</h2>
          <p className="text-lg text-[#211007]">
            Selección premium de maderas y leñas nacionales clasificadas por calidad y listas para tu proyecto
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
                  {(() => {
                    const multiple = Array.isArray((wood as any).images)
                      ? (wood as any).images
                      : Array.isArray((wood as any).image)
                      ? (wood as any).image
                      : null
                    if (multiple) {
                      return <AutoCarousel images={multiple} alt={wood.name} />
                    }
                    return (
                      <Image
                        src={(wood as any).image || "/placeholder.svg"}
                        alt={wood.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    )
                  })()}
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