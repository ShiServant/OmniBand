import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { bands } from "@/lib/bands"
import { ArrowRight, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "Bands | 乐队们 - OmniBand | 牛津热音社",
  description: "Meet the bands of OmniBand | 认识牛津热音社的乐队们",
}

export default function BandsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <SiteHeader />

      <main>
        <section className="py-16 text-center bg-gradient-to-b from-gray-900 to-black">
          <h1 className="text-4xl font-bold mb-4">Bands | 乐队们</h1>
          <p className="text-xl text-gray-300">
            Meet the bands of OmniBand | 认识热音社的乐队们
          </p>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {bands.map((band) => (
                <Link key={band.slug} href={`/bands/${band.slug}`} className="group">
                  <Card className="h-full p-8 bg-primary/10 border border-gray-700 text-left transition-colors group-hover:border-gray-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Music className="w-6 h-6 text-gray-300" />
                      <span className="text-sm text-gray-400">
                        {band.genre} | {band.genreZh}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {band.name} | {band.nameZh}
                    </h2>
                    <p className="text-gray-300 mb-2">{band.tagline}</p>
                    <p className="text-gray-300 mb-6">{band.taglineZh}</p>
                    <span className="inline-flex items-center gap-2 text-white font-medium group-hover:underline">
                      Learn More | 了解更多
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2024 OmniBand | 牛津热音社. All rights reserved. | 版权所有</p>
      </footer>
    </div>
  )
}
