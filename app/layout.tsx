import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

export const metadata = {
  title: 'Diginova Solutions',
  description: 'Entreprise de solutions numériques et innovation digitale',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />

        <main className="min-h-screen container mx-auto px-4 py-10">
          {children}
        </main>

        <Footer />

        {/* Bulle WhatsApp */}
        <WhatsappButton />
      </body>
    </html>
  )
}
