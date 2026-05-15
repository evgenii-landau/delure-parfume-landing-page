"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Sparkles, Leaf, Package } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Long-lasting Scent",
    description: "Our fragrances are designed to evolve beautifully throughout the day, lasting 12+ hours on skin.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Formula",
    description: "Each perfume is meticulously crafted by our master perfumers using traditional techniques.",
  },
  {
    icon: Leaf,
    title: "Rare Ingredients",
    description: "We source the finest natural ingredients from ethical suppliers around the world.",
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    description: "Luxurious presentation meets environmental responsibility with recyclable materials.",
  },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 bg-secondary">
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
            The DELURE difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background mb-6">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
