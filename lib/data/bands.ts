export interface Band {
  /** URL slug, e.g. /bands/midnight-oddities */
  slug: string
  name: string
  chineseName: string
  /** Path under /public, used as the card background on the list page */
  coverImage: string
  /** Optional hero image for the detail page; falls back to coverImage */
  heroImage?: string
  genres: string[]
  /** Use \n for line breaks and blank lines for paragraphs */
  description: string
  descriptionZh: string
  /** role can hold multiple positions, e.g. "Vocal | Guitar" */
  members: { name: string; role: string }[]
}

export const bands: Band[] = [
  {
    slug: "midnight-oddities",
    name: "Midnight Oddities",
    chineseName: "午夜杂货铺",
    coverImage: "/images/bands/midnight-oddities/cover.jpg",
    heroImage: "/images/bands/midnight-oddities/inner-cover.png",
    genres: ["Indie Rock", "Alternative"],
    description: `There's a corner shop beneath the streetlight
stocked with vinyl, fresh beer, and burning heart,
and always your favorite encore.

Here, six keepers raise a toast
to every passerby:
drink the night dry,
dance till you drop,
then drift gently into sleep.`,
    descriptionZh: `在牛津有家杂货铺只在深夜开门，贩售夜宵零食、自酿美酒、以及数不清的、风格各异的二手摇滚唱片。

几个喜爱玩音乐的学生打理着这家店铺，这群人之中有吉他手兼主唱，吉他手兼萨克斯，吉他手兼鼓手，鼓手兼小号，主唱兼键盘，贝斯手兼贝斯手。

门口偶尔会挂上写着"你想要的，应有尽有"的招牌。当你看到它时，请务必光顾本店，那是每次门店上新的时候。`,
    members: [
      { name: "Peggy", role: "Vocal | Guitar" },
      { name: "Chelsea", role: "Vocal | Keyboard" },
      { name: "Charlie", role: "Vocal | Drum | Guitar" },
      { name: "Crabby", role: "Bass | Vocal" },
      { name: "PPE", role: "Guitar | Vocal" },
      { name: "Kevin", role: "Drum | Trumpet" },
    ],
  },
]

export function getBandBySlug(slug: string): Band | undefined {
  return bands.find((band) => band.slug === slug)
}
