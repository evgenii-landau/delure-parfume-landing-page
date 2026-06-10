"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function BrandStorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" ref={ref} className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-end">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/brand-story.webp"
              alt="The art of perfume making"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-balance">
              Composed in Grasse, never rushed
            </h2>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Our house began in Grasse, the town where perfume has been a craft for three hundred years. We make scent the slow way, the way it was made before machines learned to imitate it.
              </p>
              <p>
                A single formula can take our perfumers years. The rose is cut in the fields of Bulgaria before the dew lifts. The oud is left to age. Nothing is hurried, and nothing is hidden.
              </p>
              <p>
                Every bottle is filled by hand. On the skin it keeps moving, opening and fading through the day, never quite the same on two people.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="font-serif text-4xl">25+</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Years of Craft</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-serif text-4xl">40+</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Countries</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-serif text-4xl">100%</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Natural</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
