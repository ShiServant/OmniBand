'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function OmnibandLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6dd4352bc6f4094e483445dbf2ded9ac-seffbdxme7av13NHYlAHVMyC9y9DQz.png"
            alt="OmniBand Logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
          <span className="text-2xl font-bold">OmniBand | 牛津热音社</span>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About Us | 关于我们</a>
          <a href="#tickets" className="hover:underline">Tickets | 购票</a>
        </nav>
      </header>

      <main>
        <section className="py-20 text-center bg-gradient-to-b from-gray-900 to-black">
          <h1 className="text-5xl font-bold mb-6">OmniBand 2026 | 牛津热音社</h1>
          <p className="text-xl mb-8">Where Passion Meets Music | 激情与音乐的交汇</p>
          <Link href="https://wj.qq.com/r/login.html?s_url=https%3A%2F%2Fwj.qq.com%2Fs2%2F15004374%2F09e4%2F&sid=15004374&hash=09e4&login_type=unite&scene_type=respondent" passHref>
            <Button className="bg-white text-black hover:bg-gray-200">Join Us | 加入我们</Button>
          </Link>
        </section>

        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Us | 关于我们</h2>
              <p className="text-gray-300">
                OmniBand is a non-profit music society founded by Oxford University students. We bring together all music-loving students, providing opportunities to recruit musicians and perform on stage.
              </p>
              <p className="text-gray-300">
                牛津热音社是由牛津大学在校学生创办的非盈利音乐社团。我们聚集所有热爱音乐的同学们，为大家提供一个招募乐手、上台演出的机会。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd0b7efefff27c629d6bce628cbb88ec-QVh2Gop1bJFFR5RVHJuLKaHNnINSQj.jpeg"
                alt="OmniBand Past Performance"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="tickets" className="py-24 sm:py-32 relative">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Tickets | 购票</h1>

              <Card className="p-8 bg-primary/10 border border-gray-300 shadow-[0_0_30px_-5px] shadow-primary/30 mt-8">
                <h2 className="text-2xl text-white font-bold mb-8">🍂 Autumn Acoustic Tickets </h2>
                <div className="space-y-6 text-left">
                  <div className="space-y-2">
                    <h3 className="text-gray-300 font-bold mb-8m">📆 Date and Time</h3>
                    <p className="text-gray-300">November 16th (W5 Saturday) 7pm</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-gray-300 font-bold mb-8m">⛪️ Venue</h3>
                    <p className="text-gray-300">Trinity College Auditorium (Garden Room)</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-gray-300 font-bold mb-8m">🎟️ Pricing</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex justify-between items-center">
                        <span>Early Bird (Before Nov 10th)</span>
                        <span className="font-medium">GBP 5.99 / RMB 55</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Full Price</span>
                        <span className="font-medium">GBP 7.99 / RMB 75</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/pdfs/autumn_acoustic_setlist.pdf"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <Ticket className="w-5 h-5" />
                  Setlist | 节目单
                </Link>
              </Card>
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
