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
          src="/images/immersive.jpg"
          alt="Cinematic perfume atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center text-center px-6"
      >
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground max-w-4xl leading-tight text-balance">
          {"\"Elegance is not about being noticed, it's about being remembered.\""}
        </p>
      </motion.div>
    </section>
  )
}
