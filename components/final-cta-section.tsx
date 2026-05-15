"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/final-cta.jpg"
          alt="Discover your signature scent"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
              Begin Your Journey
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8 text-balance">
              Find your signature scent
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed">
              Join our world of extraordinary fragrances. Be the first to know about new releases, exclusive offers, and the stories behind our scents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50"
              />
              <Button
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 px-8 text-sm tracking-widest uppercase whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-primary-foreground/50">
              By subscribing, you agree to our Privacy Policy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
