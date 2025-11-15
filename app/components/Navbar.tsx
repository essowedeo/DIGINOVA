import Logo from './Logo'


export default function Navbar() {
return (
<nav className="w-full bg-white shadow-md py-4">
<div className="container mx-auto flex justify-between items-center px-4">
<Logo />
<div className="space-x-6 font-medium">
<a href="/" className="hover:text-blue-600">Accueil</a>
<a href="/contact" className="hover:text-blue-600">Contact</a>
</div>
</div>
</nav>
)
}