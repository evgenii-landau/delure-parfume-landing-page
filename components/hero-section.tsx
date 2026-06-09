"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-perfume.jpg"
          alt="Luxury perfume bottle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.4em] uppercase text-foreground/70 mb-6"
        >
          Discover the essence of you
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground mb-8 text-balance"
        >
          A scent that becomes your signature
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafted with rare ingredients and timeless artistry, our fragrances transcend the ordinary to become an extension of your identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm font-medium tracking-widest uppercase"
          >
            Discover the collection
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-sm font-medium tracking-widest uppercase"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch the story
          </Button>
        </motion.div>
      </motion.div>


    </section>
  )
}
