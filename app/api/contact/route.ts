import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { nombre, email, telefono, proyecto, mensaje } = await req.json();

  // Configura el transporter con los datos de tu SMTP de DonDominio
  const transporter = nodemailer.createTransport({
    host: "smtp.dondominio.com", // Cambia si tu host es diferente
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web Aserradero" <${process.env.SMTP_USER}>`,
      to: "info@aserraderocatacho.es", // Cambia por el correo real de la dueña si es necesario
      subject: "Nueva consulta desde la web",
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nProyecto: ${proyecto}\nMensaje: ${mensaje}`,
      html: `<p><b>Nombre:</b> ${nombre}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Teléfono:</b> ${telefono}</p>
             <p><b>Proyecto:</b> ${proyecto}</p>
             <p><b>Mensaje:</b><br/>${mensaje}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}