"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ImmersiveVisualSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/immersive.webp"
          alt="Cinematic perfume atmosphere"
          fill
          className="object-cover"
        />
        {/* Warm coffee gradient — darkens the bright left without flattening the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(26,20,16,0.7) 0%, rgba(26,20,16,0.34) 55%, rgba(28,22,17,0.5) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center text-center px-8"
      >
        <p
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground max-w-5xl leading-[1.6] tracking-[0.03em] text-balance"
          style={{ textShadow: "0 0 24px rgba(26,20,16,0.5)" }}
        >
          <span className="text-[1.4em] leading-[0] align-[-0.15em] text-primary-foreground/50">&ldquo;</span>
          Elegance is not about being noticed, it&rsquo;s about being remembered.
          <span className="text-[1.4em] leading-[0] align-[-0.35em] text-primary-foreground/50">&rdquo;</span>
        </p>
      </motion.div>
    </section>
  )
}
