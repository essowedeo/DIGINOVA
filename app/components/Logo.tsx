import Image from 'next/image'


export default function Logo() {
return (
<div className="flex items-center gap-2">
<Image
src="/diginova-logo.png"
alt="Logo Diginova Solutions"
width={40}
height={40}
/>
<span className="text-2xl font-bold text-blue-600">Diginova</span>
</div>
)
}