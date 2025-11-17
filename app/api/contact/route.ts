import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Vérifie que les champs existent
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont requis" }), { status: 400 });
    }

    // Création du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dnovasolution@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // App Password Gmail
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: `"${name}" <dnovasolution@gmail.com>`,
      replyTo: email,
      to: "dnovasolution@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message :</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi" }), { status: 500 });
  }
}
