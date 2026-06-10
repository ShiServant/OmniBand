import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { bands, getBandBySlug } from "@/lib/bands"
import { ArrowLeft, Music, Users } from "lucide-react"

interface BandPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return bands.map((band) => ({ slug: band.slug }))
}

export function generateMetadata({ params }: BandPageProps): Metadata {
  const band = getBandBySlug(params.slug)
  if (!band) {
    return { title: "Band Not Found - OmniBand | 牛津热音社" }
  }
  return {
    title: `${band.name} | ${band.nameZh} - OmniBand | 牛津热音社`,
    description: band.tagline,
  }
}

export default function BandPage({ params }: BandPageProps) {
  const band = getBandBySlug(params.slug)
  if (!band) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <SiteHeader />

      <main>
        <section className="py-16 text-center bg-gradient-to-b from-gray-900 to-black">
          <p className="text-sm text-gray-400 mb-3 flex items-center justify-center gap-2">
            <Music className="w-4 h-4" />
            {band.genre} | {band.genreZh}
          </p>
          <h1 className="text-4xl font-bold mb-4">
            {band.name} | {band.nameZh}
          </h1>
          <p className="text-xl text-gray-300">{band.tagline}</p>
          <p className="text-xl text-gray-300">{band.taglineZh}</p>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About | 简介</h2>
              <p className="text-gray-300">{band.description}</p>
              <p className="text-gray-300">{band.descriptionZh}</p>
            </div>

            <Card className="p-8 bg-primary/10 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Members | 成员
              </h2>
              <ul className="space-y-3">
                {band.members.map((member) => (
                  <li
                    key={`${member.role}-${member.name}`}
                    className="flex justify-between items-center text-gray-300"
                  >
                    <span>
                      {member.role} | {member.roleZh}
                    </span>
                    <span className="font-medium text-white">{member.name}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Link
              href="/bands"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Bands | 返回乐队列表
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2024 OmniBand | 牛津热音社. All rights reserved. | 版权所有</p>
      </footer>
    </div>
  )
}
