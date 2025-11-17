import Link from 'next/link'
import Logo from './Logo'


export default function Navbar() {
 return (
 <nav className="w-full bg-white shadow-md py-4">
 <div className="container mx-auto flex justify-between items-center px-4">
 <Logo />
 <div className="space-x-6 font-medium">
 <Link href="/" className="hover:text-blue-600">Accueil</Link>
 <Link href="/about" className="hover:text-blue-600">À propos</Link>
 <Link href="/services" className="hover:text-blue-600">Services</Link>
 <Link href="/technologies" className="hover:text-blue-600">Technologies</Link>
 <Link href="/contact" className="hover:text-blue-600">Contact</Link>
 </div>
 </div>
 </nav>
 )
}