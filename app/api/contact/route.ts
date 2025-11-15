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
      from: email,
      to: "dnovasolution@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi" }), { status: 500 });
  }
}
