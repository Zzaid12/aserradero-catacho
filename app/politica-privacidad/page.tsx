import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Maderas Catacho',
  description: 'Política de privacidad y protección de datos de Maderas Catacho',
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#211007] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a1f0d]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Política de Privacidad</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#211007] mb-4">MADERAS CATACHO</h2>
            <p className="text-lg text-gray-700">
              
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">1. Información del Responsable</h3>
            <p className="text-gray-700 mb-4">
              <strong>Responsable del tratamiento:</strong> Maderas Catacho<br />
              <strong>NIF/CIF:</strong>  074500 45 T<br />
              <strong>Domicilio:</strong> Calle Román Gordo, 8, 10300 Navalmoral de la Mata, Cáceres<br />
              <strong>Email:</strong> info@aserraderocatacho.com<br />
              <strong>Teléfono:</strong> +34 927 530 602
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">2. Finalidad del Tratamiento</h3>
            <p className="text-gray-700 mb-4">
              Sus datos personales serán tratados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Gestionar consultas y solicitudes de información</li>
              <li>Proporcionar presupuestos y cotizaciones</li>
              <li>Gestionar pedidos y entregas</li>
              <li>Enviar comunicaciones comerciales (con su consentimiento)</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">3. Base Legal</h3>
            <p className="text-gray-700 mb-4">
              El tratamiento de sus datos se basa en:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Ejecución de contrato:</strong> Para la gestión de pedidos y servicios</li>
              <li><strong>Interés legítimo:</strong> Para responder consultas y enviar comunicaciones comerciales</li>
              <li><strong>Consentimiento:</strong> Para el envío de newsletters y comunicaciones promocionales</li>
              <li><strong>Obligación legal:</strong> Para cumplir con requisitos fiscales y contables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">4. Tipos de Datos Recopilados</h3>
            <p className="text-gray-700 mb-4">
              Recopilamos los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Datos de identificación (nombre, apellidos, NIF/CIF)</li>
              <li>Datos de contacto (email, teléfono, dirección)</li>
              <li>Datos comerciales (historial de pedidos, preferencias)</li>
              <li>Datos de navegación (cookies, IP, páginas visitadas)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">5. Conservación de Datos</h3>
            <p className="text-gray-700 mb-4">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">6. Destinatarios</h3>
            <p className="text-gray-700 mb-4">
              Sus datos no serán cedidos a terceros, salvo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Cuando sea necesario para la prestación del servicio</li>
              <li>Cuando exista una obligación legal</li>
              <li>Cuando medie su consentimiento expreso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">7. Sus Derechos</h3>
            <p className="text-gray-700 mb-4">
              Como titular de los datos, tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">8. Ejercicio de Derechos</h3>
            <p className="text-gray-700 mb-4">
              Para ejercer sus derechos, puede contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Email: info@aserraderocatacho.com</li>
              <li>Correo postal: Calle Román Gordo, 8, 10300 Navalmoral de la Mata, Cáceres</li>
              <li>Teléfono: +34 927 530 602</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">9. Cookies</h3>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar todas las cookies o para recibir un aviso cuando se envíe una cookie.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">10. Seguridad</h3>
            <p className="text-gray-700 mb-4">
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">11. Cambios en la Política</h3>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar esta política de privacidad. Los cambios serán notificados a través de nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">12. Contacto</h3>
            <p className="text-gray-700 mb-4">
              Para cualquier consulta sobre esta política de privacidad, puede contactarnos en:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Maderas Catacho</strong><br />
                Calle Román Gordo, 8<br />
                10300 Navalmoral de la Mata, Cáceres<br />
                Email: info@aserraderocatacho.com<br />
                Teléfono: +34 927 530 602
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}


