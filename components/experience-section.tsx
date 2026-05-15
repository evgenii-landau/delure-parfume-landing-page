"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            The Unboxing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl mx-auto">
            An experience that begins before the first spritz
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/images/experience-main.jpg"
              alt="Luxury unboxing experience"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="/images/experience-detail-1.jpg"
                alt="Premium glass bottle"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="/images/experience-detail-2.jpg"
                alt="Luxurious packaging"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="col-span-2 bg-secondary p-8 flex flex-col justify-center"
            >
              <h3 className="font-serif text-2xl mb-4">Tactile Luxury</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every element is designed to delight—from the weight of the hand-blown glass bottle to the soft touch of our signature packaging. The magnetic closure, the embossed logo, the silk ribbon—each detail tells our story of uncompromising quality.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
