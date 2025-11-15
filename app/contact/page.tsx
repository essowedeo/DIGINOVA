"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xkgkbrdp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        // Redirige vers la page d'accueil après l'envoi
        router.push("/");
      } else {
        setStatus("error");
      }
    } catch (err) {
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
        <p className="text-center text-gray-600 mb-8">
          Remplissez le formulaire et nous reviendrons vers vous rapidement.
        </p>

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
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Envoyer
          </button>
        </form>

        {status === "error" && (
          <p className="mt-4 text-red-600 text-center font-semibold">
            ❌ Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </div>
    </div>
  );
}
