"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flower2, Citrus, TreeDeciduous } from "lucide-react"

const notes = [
  {
    type: "Top Notes",
    description: "The first impression—bright and captivating",
    icon: Citrus,
    ingredients: ["Bergamot", "Pink Pepper", "Mandarin", "Cardamom"],
    glow: "from-amber-400/30 to-orange-400/30",
    accent: "from-amber-400 to-orange-400",
    iconBg: "from-amber-400/25 to-orange-400/25",
    border: "border-amber-400/30",
  },
  {
    type: "Heart Notes",
    description: "The soul of the fragrance—rich and complex",
    icon: Flower2,
    ingredients: ["Bulgarian Rose", "Jasmine Absolute", "Iris", "Violet"],
    glow: "from-rose-400/30 to-pink-400/30",
    accent: "from-rose-400 to-pink-400",
    iconBg: "from-rose-400/25 to-pink-400/25",
    border: "border-rose-400/30",
  },
  {
    type: "Base Notes",
    description: "The lasting memory—deep and sensual",
    icon: TreeDeciduous,
    ingredients: ["Oud Wood", "Amber", "Musk", "Sandalwood"],
    glow: "from-amber-700/30 to-stone-500/30",
    accent: "from-amber-700 to-stone-400",
    iconBg: "from-amber-700/25 to-stone-500/25",
    border: "border-amber-700/30",
  },
]

export function FragranceNotesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 text-foreground overflow-hidden">
      {/* Soft cream block that eases in and out of the ivory sections above and below */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, var(--background) 0%, #F4F0EA 16%, #EFEAE2 50%, #F4F0EA 84%, var(--background) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
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
                <div className={`relative p-8 lg:p-10 rounded-lg border ${note.border} bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-md transition-all duration-500 overflow-hidden`}>
                  {/* Colored top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${note.accent} opacity-80`} />

                  {/* Corner ambient glow */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${note.glow} blur-2xl pointer-events-none`} />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${note.iconBg} border border-foreground/10`}>
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative font-serif text-2xl mb-2 text-foreground">{note.type}</h3>
                  <p className="relative text-sm text-muted-foreground mb-8 leading-relaxed">
                    {note.description}
                  </p>

                  {/* Ingredients */}
                  <div className="relative space-y-3">
                    {note.ingredients.map((ingredient) => (
                      <div
                        key={ingredient}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${note.accent}`} />
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover bottom glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${note.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
