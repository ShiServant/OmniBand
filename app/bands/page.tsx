import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { bands } from "@/lib/data/bands"

export const metadata: Metadata = {
  title: "Bands | 乐队们 - OmniBand | 牛津热音社",
  description: "Meet the bands of OmniBand | 认识牛津热音社的乐队们",
}

export default function BandsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <SiteHeader />

      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bands.map((band) => (
            <Link
              key={band.slug}
              href={`/bands/${band.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              <Image
                src={band.coverImage}
                alt={`${band.name} | ${band.chineseName}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white">
                  {band.name}
                </h2>
                <p className="mt-3 text-lg text-white/90 tracking-[0.2em]">
                  {band.chineseName}
                </p>
              </div>
            </Link>
          ))}

          <div className="relative flex aspect-[4/3] items-center justify-center bg-zinc-800">
            <p className="font-serif text-2xl sm:text-3xl tracking-wide text-white/60">
              Waiting for you
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2024 OmniBand | 牛津热音社. All rights reserved. | 版权所有</p>
      </footer>
    </div>
  )
}
