import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal - Maderas Catacho',
  description: 'Aviso legal y condiciones de uso del sitio web de Maderas Catacho',
}

export default function AvisoLegalPage() {
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
            <h1 className="text-2xl font-bold">Aviso Legal</h1>
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
            <h3 className="text-2xl font-bold text-[#211007] mb-4">1. Información General</h3>
            <p className="text-gray-700 mb-4">
              En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos de información general de este sitio web:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Denominación social:</strong> Maderas Catacho<br />
                <strong>NIF/CIF:</strong>  074500 45 T<br />
                <strong>Domicilio:</strong> Calle Román Gordo, 8, 10300 Navalmoral de la Mata, Cáceres<br />
                <strong>Email:</strong> info@aserraderocatacho.com<br />
                <strong>Teléfono:</strong> +34 927 530 602<br />
                <strong>Actividad:</strong> TRANSFORMACIÓN DE TRONCOS EN TABLAS TABLONES, VIGAS Y OTROS PRODUCTOS DE MADEDA ASERRADA
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">2. Términos y Condiciones de Uso</h3>
            <p className="text-gray-700 mb-4">
              El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de todos los términos y condiciones incluidos en este Aviso Legal.
            </p>
            <p className="text-gray-700 mb-4">
              El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral, las buenas costumbres y el orden público.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">3. Propiedad Intelectual</h3>
            <p className="text-gray-700 mb-4">
              Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de Maderas Catacho y quedan reservados todos los derechos sobre los mismos.
            </p>
            <p className="text-gray-700 mb-4">
              La reproducción, distribución, comercialización y transformación, total o parcial, no autorizada de este contenido, constituye una infracción de los derechos de propiedad intelectual de Maderas Catacho.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">4. Responsabilidad</h3>
            <p className="text-gray-700 mb-4">
              Maderas Catacho no se hace responsable de los daños y perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del presente sistema electrónico.
            </p>
            <p className="text-gray-700 mb-4">
              Asimismo, Maderas Catacho no garantiza la ausencia de virus u otros elementos que puedan causar alteraciones en los sistemas informáticos del usuario o en los documentos electrónicos y archivos almacenados en sus sistemas informáticos.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">5. Enlaces</h3>
            <p className="text-gray-700 mb-4">
              Los enlaces que pudieran establecerse desde este sitio web a otros sitios web no constituyen una recomendación, promoción, identificación o conformidad de Maderas Catacho con las declaraciones, contenidos o servicios ofrecidos desde los sitios web de destino.
            </p>
            <p className="text-gray-700 mb-4">
              Maderas Catacho no se hace responsable del contenido de los enlaces, ni de las modificaciones que se puedan producir, ni de su uso, ni de la disponibilidad técnica de los sitios enlazados.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">6. Condiciones de Compra</h3>
            <p className="text-gray-700 mb-4">
              Los precios mostrados en este sitio web son orientativos y pueden variar sin previo aviso. Para obtener precios actualizados y realizar pedidos, es necesario contactar directamente con Maderas Catacho.
            </p>
            <p className="text-gray-700 mb-4">
              Los pedidos se formalizarán mediante contrato escrito o presupuesto firmado, donde se especificarán las condiciones comerciales, plazos de entrega y términos de pago.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">7. Calidad y Garantías</h3>
            <p className="text-gray-700 mb-4">
              Maderas Catacho se compromete a suministrar productos de la calidad especificada en cada pedido, cumpliendo con las normativas técnicas y de seguridad vigentes.
            </p>
            <p className="text-gray-700 mb-4">
              Las garantías se rigen por la normativa vigente en materia de compraventa y por las condiciones específicas acordadas en cada contrato.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">8. Legislación Aplicable</h3>
            <p className="text-gray-700 mb-4">
              Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de Cáceres.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">9. Modificaciones</h3>
            <p className="text-gray-700 mb-4">
              Maderas Catacho se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">10. Información Comercial</h3>
            <p className="text-gray-700 mb-4">
              La información comercial que se facilita a través de este sitio web tiene carácter meramente informativo y no constituye una oferta comercial vinculante.
            </p>
            <p className="text-gray-700 mb-4">
              Para obtener información detallada sobre productos, precios y disponibilidad, se recomienda contactar directamente con Maderas Catacho.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">11. Protección de Datos</h3>
            <p className="text-gray-700 mb-4">
              Para información sobre el tratamiento de datos personales, consulte nuestra <Link href="/politica-privacidad" className="text-[#211007] hover:underline font-semibold">Política de Privacidad</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-[#211007] mb-4">12. Contacto</h3>
            <p className="text-gray-700 mb-4">
              Para cualquier consulta sobre este aviso legal, puede contactarnos en:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Maderas Catacho</strong><br />
                Calle Germán Gordo, 8<br />
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


