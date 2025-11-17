import Image from 'next/image'
import Link from 'next/link'


export default function Logo() {
 return (
 <Link href="/" className="flex items-center gap-2">
 <Image
 src="/logo.png"
 alt="Logo THENOVA"
 width={40}
 height={40}
 />
 <span className="text-2xl font-bold text-blue-600">THENOVA Solutions</span>
 </Link>
 )
}