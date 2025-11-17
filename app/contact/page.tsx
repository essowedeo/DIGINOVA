"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        // Redirige vers la page d'accueil après un court délai
        setTimeout(() => router.push("/"), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">

      {/* IMAGE DE FOND */}
      <div className="absolute inset-0">
        <Image
          src="/contact-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-xl p-10 bg-white/95 rounded-3xl shadow-xl">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image src="/logo.png" alt="Diginova Solutions" width={60} height={60} />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Contactez-nous
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Remplissez le formulaire et nous reviendrons vers vous rapidement.
        </p>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Ou contactez-nous directement :</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-700">+228 79 42 03 22</p>
              <div className="flex justify-center space-x-4 mt-1">
                <a
                  href="tel:+22879420322"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  📞 Appeler
                </a>
                <a
                  href="https://wa.me/22879420322"
                  target="_blank"
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700">+228 97 22 07 84</p>
              <div className="flex justify-center space-x-4 mt-1">
                <a
                  href="tel:+22897220784"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  📞 Appeler
                </a>
                <a
                  href="https://wa.me/22897220784"
                  target="_blank"
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            required
            rows={4}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            ✅ Message envoyé avec succès ! Redirection en cours...
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-600 text-center font-semibold">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </div>
    </div>
  );
}
