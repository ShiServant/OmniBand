export interface Band {
  /** URL slug, e.g. /bands/midnight-oddities */
  slug: string
  name: string
  chineseName: string
  /** Path under /public, used as card background and detail hero */
  coverImage: string
  genres: string[]
  description: string
  descriptionZh: string
  members: { role: string; roleZh: string; name: string }[]
}

export const bands: Band[] = [
  {
    slug: "midnight-oddities",
    name: "Midnight Oddities",
    chineseName: "午夜杂货铺",
    coverImage: "/images/bands/midnight-oddities/cover.jpg",
    genres: ["Indie Rock", "Alternative"],
    description:
      "Band introduction coming soon. Midnight Oddities is one of the resident bands of OmniBand, bringing indie and alternative rock to every showcase.",
    descriptionZh:
      "乐队简介即将上线。午夜杂货铺是牛津热音社的常驻乐队之一，为每一场演出带来独立与另类摇滚之声。",
    members: [
      { role: "Vocals", roleZh: "主唱", name: "TBA" },
      { role: "Guitar", roleZh: "吉他", name: "TBA" },
      { role: "Bass", roleZh: "贝斯", name: "TBA" },
      { role: "Drums", roleZh: "鼓", name: "TBA" },
    ],
  },
]

export function getBandBySlug(slug: string): Band | undefined {
  return bands.find((band) => band.slug === slug)
}
