import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aserradero Catacho - Maderas de Calidad",
  description:
    "Más de 30 años transformando bosques en oportunidades. Ofrecemos la mejor selección de maderas y un servicio integral.",
  generator: "v0.dev",
  icons: {
    icon: "/icono.png",
    shortcut: "/icono.png",
    apple: "/icono.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
