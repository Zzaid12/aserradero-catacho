"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Truck, Scissors, Users, ShoppingCart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

function CarouselWrapper({ images, alt }: { images: string[]; alt: string }) {
  const [api, setApi] = useState<any>(null)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="w-full h-full relative">
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

export default function AserraderoCatacho() {
  const woodTypes = [
    {
      name: "Estacas de madera de castaño",
      description: "Estacas de alta calidad",
      uses: ["cerramientos", "cultivos", "jardinería"],
      image: "/estacas-cerramiento.png",
    },
    {
      name: "Tablones de castaño en rústico",
      description: "Tablones naturales perfectos para encimeras y mesas",
      uses: ["encimeras", "mesas", "decoración"],
      images: [
        "/madera-castano-encimeras.png",
        "/madera-castano-tejado.png",
        "/madera-castano.png",
      ],
    },
    {
      name: "Ripia de pino y castaño",
      description: "Ripia tradicional para tejados y cubiertas",
      uses: ["tejados", "cubiertas", "construcción"],
      images: ["/ripia-pino-castano.png", "/ripia-pino-castano2.png",],
    },
  ]

  const services = [
    {
      icon: Users,
      title: "Asesoramiento",
      description: "Te ayudamos a elegir las maderas perfectas para tu proyecto",
      features: ["Expertos en maderas", "Consulta gratuita", "Soporte técnico"],
    },
    {
      icon: Scissors,
      title: "Medidas personalizadas",
      description: "Cortamos las maderas según tus especificaciones exactas",
      features: ["Precisión", "Sin desperdicios", "Entrega rápida"],
    },
    {
      icon: Truck,
      title: "Transporte a domicilio",
      description: "Llevamos tus pedidos directamente a tu obra o taller",
      features: ["Cobertura regional", "Carga y descarga", "Horario flexible"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="bg-[#ffffff] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <Image src="/logo.png" alt="Maderas Catacho" width={140} height={66} className="h-10 w-auto" />
              </a>
              <h1 className="text-xl font-bold text-[#211007] hidden sm:block">Maderas Catacho</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-[#211007] hover:text-[#bea99f]">
                Inicio
              </a>
              <a href="#catalogo" className="text-[#211007] hover:text-[#bea99f]">
                Catálogo
              </a>
              <a href="#servicios" className="text-[#211007] hover:text-[#bea99f]">
                Servicios
              </a>
              <a href="#contacto" className="text-[#211007] hover:text-[#bea99f]">
                Contacto
              </a>
            </nav>
            <a href="tel:+34927530602">
              <Button className="bg-[#211007] hover:bg-[#000000] text-white">
                <Phone className="w-4 h-4 mr-2" />
                Llama ahora
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/aserradero-hero.jpg" alt="Wood texture background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#211007] bg-opacity-40"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maderas de calidad
            <br />
            para tus proyectos
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Más de 30 años transformando bosques en oportunidades. Ofrecemos la mejor selección de maderas y leñas y un servicio
            integral: compra, venta y procesamiento.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contacto">
              <Button size="lg" className="bg-[#211007] hover:bg-[#000000] text-white">
                Solicitar información
              </Button>
            </a>
            <a href="/catalogo">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#211007] bg-transparent"
              >
                Ver catálogo
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Wood Catalog Section */}
      <section id="catalogo" className="py-16 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-[#211007] mb-4">Nuestro catálogo de maderas y leñas</h3>
            <p className="text-lg text-[#211007]">
              Selección premium de maderas nacionales clasificadas
              <br />
              por calidad y listas para tu proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodTypes.slice(0, 3).map((wood, index) => (
              <motion.div
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-visible cursor-pointer md:relative"
                style={{ minHeight: undefined, height: undefined }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      return <CarouselWrapper images={multiple} alt={wood.name} />
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
                    <a href="#contacto">
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
                  <a href="#contacto">
                    <Button className="w-full bg-[#211007] hover:bg-[#000000] text-white mt-auto">Solicitar información</Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="/catalogo">
              <Button size="lg" className="bg-[#211007] hover:bg-[#000000] text-white">
                Ver todo el catálogo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-[#211007] mb-4">Nuestros servicios</h3>
            <p className="text-lg text-[#211007]">
              Transporte a domicilio, medidas personalizadas y asesoramiento experto
              <br />
              para que tu proyecto sea un éxito
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-[#bea99f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#211007] mb-2">{service.title}</h4>
                <p className="text-[#211007] mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-[#211007]">
                      <CheckCircle className="w-4 h-4 text-[#bea99f] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/listo.jpg?height=400&width=1200')" }}
      >
        <div className="absolute inset-0 bg-[#211007] bg-opacity-70"></div>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Listo para tu próximo proyecto?
          </motion.h3>
          <motion.p 
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cuéntanos tu idea y te damos un presupuesto personalizado.
            <br />
            Nuestros expertos te ayudarán a encontrar la madera perfecta
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://wa.me/34927530602" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-[#211007] hover:bg-[#f4f4f4]">
                Escríbenos por WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-[#efefef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-[#211007] mb-4">Contáctanos</h3>
            <p className="text-lg text-[#211007]">Envíanos tu consulta y te responderemos con la mayor brevedad posible</p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#211007] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">
                MADERAS
                <br />
                CATACHO
              </h4>
            </div>
            <div>
              <h5 className="font-bold mb-4">Oficinas</h5>
              <p className="text-sm text-[#bea99f] mb-4">
                Navalmoral de la Mata
                <br />
                Calle de la Industria, 15
                <br />
                10300, Cáceres
              </p>
              <p className="text-sm text-[#bea99f]">
                Jarandilla de la Vera
                <br />
                C. de San Gregorio, 27
                <br />
                10450, Cáceres
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Horarios</h5>
              <p className="text-sm text-[#bea99f] mb-2">Navalmoral de la Mata: De lunes a viernes de 7:00 h - 15:00 h</p>
              <p className="text-sm text-[#bea99f]">Jarandilla de la Vera: De lunes a viernes de 9:00 h - 13:00 h</p>
            </div>
          </div>
          <div className="border-t border-[#bea99f] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <Link href="/aviso-legal" className="text-sm text-[#bea99f] hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="text-sm text-[#bea99f] hover:text-white transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  )
}
