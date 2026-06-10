"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2 bg-[#FBF9F6]">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 xl:px-24 py-20 lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm tracking-[0.4em] uppercase text-zinc-500 mb-6"
          >
            Worn like a memory
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-zinc-900 mb-8"
          >
            A scent that becomes<br />your signature
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-zinc-600 max-w-md mb-12 leading-relaxed"
          >
            A fragrance remembers what words forget. Each one is built from rare materials and left to settle on the skin, where it becomes unmistakably yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 py-6 text-sm font-medium tracking-widest uppercase"
            >
              Discover the collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsVideoOpen(true)}
              className="border-2 border-zinc-900 bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-white px-8 py-6 text-sm font-medium tracking-widest uppercase"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch the story
            </Button>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="relative min-h-[55vh] lg:min-h-screen">
          <Image
            src="/images/sections/hero.webp"
            alt="DELURE perfume bottles and boxes"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Story Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/70 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video overflow-hidden bg-charcoal"
            >
              <Image
                src="/images/immersive.webp"
                alt="The DELURE story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-background/70">
                  <Play className="h-6 w-6 text-background" />
                </div>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
