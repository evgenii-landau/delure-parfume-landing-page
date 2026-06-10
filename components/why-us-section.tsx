"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "It stays with you",
    description: "A single application carries through the day, shifting as it goes. Twelve hours, often more.",
  },
  {
    title: "Made by hand",
    description: "Every formula is composed by our perfumers in Grasse, the old way, without shortcuts.",
  },
  {
    title: "Honest materials",
    description: "We buy our naturals from growers we know, and we pay what they are worth.",
  },
  {
    title: "Kept, not discarded",
    description: "Heavy glass and refillable bottles, made to live on your shelf rather than in the bin.",
  },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Why DELURE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
            Why it lingers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 lg:gap-x-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-left"
            >
              <div className="w-8 h-px bg-foreground/25 mb-6" />
              <span className="block font-sans text-xs font-light tracking-[0.3em] text-muted-foreground mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
              <p className="font-sans font-light text-sm text-muted-foreground leading-[1.7]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
