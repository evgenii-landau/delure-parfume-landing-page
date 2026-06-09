"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const notes = [
  {
    type: "Top Notes",
    description: "The first impression—bright and captivating",
    ingredients: ["Bergamot", "Pink Pepper", "Mandarin", "Cardamom"],
  },
  {
    type: "Heart Notes",
    description: "The soul of the fragrance—rich and complex",
    ingredients: ["Bulgarian Rose", "Jasmine Absolute", "Iris", "Violet"],
  },
  {
    type: "Base Notes",
    description: "The lasting memory—deep and sensual",
    ingredients: ["Oud Wood", "Amber", "Musk", "Sandalwood"],
  },
]

function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
}

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
          {notes.map((note, index) => (
            <motion.div
              key={note.type}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseMove={handleSpotlight}
              className="group relative overflow-hidden rounded-xl bg-[#FBF9F6] p-8 lg:p-10 transition-all duration-500 ease-out hover:shadow-lg"
            >
              {/* Warm spotlight that follows the cursor inside the card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(360px circle at var(--mouse-x) var(--mouse-y), rgba(240,230,210,0.15), transparent 45%)",
                }}
              />

              <div className="relative">
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  {String(index + 1).padStart(2, "0")} / {note.type.split(" ")[0]}
                </span>

                <h3 className="font-serif text-2xl lg:text-3xl mb-3">{note.type}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {note.description}
                </p>

                <ul>
                  {note.ingredients.map((ingredient, i) => (
                    <li
                      key={ingredient}
                      className={`py-3 text-sm tracking-wide text-foreground/80 ${
                        i > 0 ? "border-t border-foreground/15" : ""
                      }`}
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
