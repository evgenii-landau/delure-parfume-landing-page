"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flower2, Citrus, TreeDeciduous } from "lucide-react"
import { GrainGradient } from "@paper-design/shaders-react"

const notes = [
  {
    type: "Top Notes",
    description: "The first impression—bright and captivating",
    icon: Citrus,
    ingredients: ["Bergamot", "Pink Pepper", "Mandarin", "Cardamom"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    type: "Heart Notes",
    description: "The soul of the fragrance—rich and complex",
    icon: Flower2,
    ingredients: ["Bulgarian Rose", "Jasmine Absolute", "Iris", "Violet"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    type: "Base Notes",
    description: "The lasting memory—deep and sensual",
    icon: TreeDeciduous,
    ingredients: ["Oud Wood", "Amber", "Musk", "Sandalwood"],
    color: "from-stone-500/20 to-neutral-500/20",
  },
]

export function FragranceNotesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 text-primary-foreground overflow-hidden">
      {/* Grain Gradient Background */}
      <div className="absolute inset-0">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          softness={0.76}
          intensity={0.45}
          noise={0}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={0}
          colors={["hsl(14, 100%, 57%)", "hsl(45, 100%, 51%)", "hsl(340, 82%, 52%)"]}
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
            The Composition
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
            A symphony of rare ingredients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {notes.map((note, index) => {
            const Icon = note.icon
            return (
              <motion.div
                key={note.type}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative p-8 lg:p-10 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-500">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${note.color}`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl mb-2">{note.type}</h3>
                  <p className="text-sm text-primary-foreground/60 mb-8">
                    {note.description}
                  </p>

                  {/* Ingredients */}
                  <div className="space-y-3">
                    {note.ingredients.map((ingredient) => (
                      <div
                        key={ingredient}
                        className="flex items-center gap-3 text-sm text-primary-foreground/80"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${note.color} blur-xl`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
