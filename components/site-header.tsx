import Image from "next/image"
import Link from "next/link"

const navItems = [
  { href: "/#about", label: "About Us | 关于我们" },
  { href: "/bands", label: "Bands | 乐队们" },
  { href: "/#tickets", label: "Tickets | 购票" },
]

export function SiteHeader() {
  return (
    <header className="container mx-auto py-6 px-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6dd4352bc6f4094e483445dbf2ded9ac-seffbdxme7av13NHYlAHVMyC9y9DQz.png"
          alt="OmniBand Logo"
          width={100}
          height={100}
          className="w-16 h-16"
        />
        <span className="text-2xl font-bold">OmniBand | 牛津热音社</span>
      </Link>
      <nav className="flex items-center gap-x-10">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
