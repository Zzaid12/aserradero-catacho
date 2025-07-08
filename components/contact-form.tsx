"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("¡Mensaje enviado correctamente!", {
      description: "Te contactaremos pronto para ayudarte con tu proyecto.",
    })

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-[#211007] text-center">Solicita tu presupuesto</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#211007]">
                Nombre completo
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="border-[#bea99f] focus:border-[#211007]"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#211007]">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="border-[#bea99f] focus:border-[#211007]"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#211007]">
                Teléfono
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="border-[#bea99f] focus:border-[#211007]"
                placeholder="+34 123 456 789"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project" className="text-[#211007]">
                Tipo de proyecto
              </Label>
              <Input
                id="project"
                name="project"
                className="border-[#bea99f] focus:border-[#211007]"
                placeholder="Construcción, muebles, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#211007]">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="border-[#bea99f] focus:border-[#211007]"
              placeholder="Cuéntanos sobre tu proyecto y qué tipo de madera necesitas..."
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#211007] hover:bg-[#000000] text-white">
            {isSubmitting ? "Enviando..." : "Enviar consulta"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
