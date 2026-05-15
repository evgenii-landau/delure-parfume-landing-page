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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/brand-story.jpg"
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
            className="lg:pl-8"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-balance">
              Born from passion, crafted with precision
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                In the heart of Grasse, where the art of perfumery has been perfected for centuries, DELURE was born. We believe that a fragrance is not merely a scent—it is a memory, an emotion, a statement of who you are.
              </p>
              <p>
                Our master perfumers dedicate years to each creation, sourcing the rarest ingredients from across the globe. From the delicate rose fields of Bulgaria to the exotic oud forests of Southeast Asia, we search for the exceptional.
              </p>
              <p>
                Every bottle is a testament to our unwavering commitment to excellence—a symphony of notes that unfolds on your skin, revealing new dimensions throughout the day.
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
