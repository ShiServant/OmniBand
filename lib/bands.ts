export interface Band {
  /** URL slug, e.g. /bands/midnight-echo */
  slug: string
  name: string
  nameZh: string
  genre: string
  genreZh: string
  /** Short intro shown on the list page */
  tagline: string
  taglineZh: string
  /** Full intro shown on the detail page */
  description: string
  descriptionZh: string
  members: { role: string; roleZh: string; name: string }[]
  image?: string
}

export const bands: Band[] = [
  {
    slug: "midnight-echo",
    name: "Midnight Echo",
    nameZh: "午夜回声",
    genre: "Alternative Rock",
    genreZh: "另类摇滚",
    tagline: "Raw energy and late-night riffs from the heart of Oxford.",
    taglineZh: "来自牛津深夜的原始能量与即兴吉他。",
    description:
      "Midnight Echo was formed in 2024 by a group of students who met at an OmniBand open jam. Blending alternative rock with post-punk influences, the band has become a regular highlight of our termly showcases.",
    descriptionZh:
      "午夜回声成立于 2024 年，由几位在热音社即兴演奏夜相识的同学组建。乐队融合另类摇滚与后朋克元素，是社团学期演出中的常驻亮点。",
    members: [
      { role: "Vocals", roleZh: "主唱", name: "Alex Chen" },
      { role: "Guitar", roleZh: "吉他", name: "Jamie Liu" },
      { role: "Bass", roleZh: "贝斯", name: "Sam Wang" },
      { role: "Drums", roleZh: "鼓", name: "Robin Zhang" },
    ],
  },
  {
    slug: "paper-lanterns",
    name: "Paper Lanterns",
    nameZh: "纸灯笼",
    genre: "Indie Folk",
    genreZh: "独立民谣",
    tagline: "Gentle harmonies and acoustic storytelling in two languages.",
    taglineZh: "双语吟唱的温柔和声与木吉他叙事。",
    description:
      "Paper Lanterns write bilingual indie folk songs about student life, homesickness and everything in between. Expect close harmonies, fingerstyle guitar and the occasional erhu cameo.",
    descriptionZh:
      "纸灯笼创作关于留学生活与乡愁的双语独立民谣。他们的演出以细腻和声、指弹吉他见长，偶尔还会有二胡惊喜客串。",
    members: [
      { role: "Vocals / Guitar", roleZh: "主唱 / 吉他", name: "Yuki Tan" },
      { role: "Vocals / Keys", roleZh: "和声 / 键盘", name: "Grace Li" },
      { role: "Cajón", roleZh: "卡宏鼓", name: "Leo Huang" },
    ],
  },
  {
    slug: "voltage-theory",
    name: "Voltage Theory",
    nameZh: "电压理论",
    genre: "Funk / Fusion",
    genreZh: "放克 / 融合",
    tagline: "Groove-driven funk fusion engineered by actual engineers.",
    taglineZh: "由真正的工程师们打造的律动放克融合。",
    description:
      "Voltage Theory brings tight grooves, brass stabs and extended solos to every OmniBand stage. Founded by engineering students, the band treats every set like a carefully tuned circuit — with room to improvise.",
    descriptionZh:
      "电压理论以紧凑的律动、铜管音色与长篇即兴独奏闻名。乐队由工程系同学创立，他们把每场演出当作一块精心调校的电路板——同时永远给即兴留出空间。",
    members: [
      { role: "Keys", roleZh: "键盘", name: "Daniel Wu" },
      { role: "Guitar", roleZh: "吉他", name: "Ivy Zhao" },
      { role: "Bass", roleZh: "贝斯", name: "Marcus Lin" },
      { role: "Drums", roleZh: "鼓", name: "Hana Sato" },
      { role: "Saxophone", roleZh: "萨克斯", name: "Tom Xu" },
    ],
  },
]

export function getBandBySlug(slug: string): Band | undefined {
  return bands.find((band) => band.slug === slug)
}
