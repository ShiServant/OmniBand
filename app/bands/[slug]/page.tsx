import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { bands, getBandBySlug } from "@/lib/data/bands"
import { ArrowLeft } from "lucide-react"

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
    title: `${band.name} | ${band.chineseName} - OmniBand | 牛津热音社`,
    description: band.description,
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
        <section className="relative h-[50vh] min-h-[320px]">
          <Image
            src={band.coverImage}
            alt={`${band.name} | ${band.chineseName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-6">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-wide text-white">
              {band.name}
            </h1>
            <p className="mt-3 text-xl text-white/90 tracking-[0.2em]">
              {band.chineseName}
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
              {band.genres.join(" / ")}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-3xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About | 乐队简介</h2>
            <p className="text-gray-300 whitespace-pre-line">{band.descriptionZh}</p>
            <p className="text-gray-300 whitespace-pre-line italic">{band.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Members | 成员介绍</h2>
            <ul className="divide-y divide-zinc-800">
              {band.members.map((member) => (
                <li
                  key={member.name}
                  className="flex justify-between items-center py-3"
                >
                  <span className="font-medium text-white">{member.name}</span>
                  <span className="text-gray-400">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/bands"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Bands | 返回乐队列表
          </Link>
        </section>
      </main>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2024 OmniBand | 牛津热音社. All rights reserved. | 版权所有</p>
      </footer>
    </div>
  )
}
