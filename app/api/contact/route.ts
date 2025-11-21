import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { nombre, email, telefono, proyecto, mensaje } = await req.json()

  const smtpHost = process.env.SMTP_HOST ?? "smtp.dondominio.com"
  const smtpPort = Number(process.env.SMTP_PORT ?? 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        ok: false,
        error: "Faltan las credenciales SMTP (SMTP_USER / SMTP_PASS). Configúralas y vuelve a intentarlo.",
      },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Web Aserradero" <${smtpUser}>`,
      to: process.env.CONTACT_TO ?? "info@aserraderocatacho.es",
      subject: "Nueva consulta desde la web",
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nProyecto: ${proyecto}\nMensaje: ${mensaje}`,
      html: `<p><b>Nombre:</b> ${nombre}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Teléfono:</b> ${telefono}</p>
             <p><b>Proyecto:</b> ${proyecto}</p>
             <p><b>Mensaje:</b><br/>${mensaje}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 })
  }
}