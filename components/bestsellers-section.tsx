"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Lumière d'Or",
    description: "Radiant citrus with a golden heart of pure amber.",
    price: "$145",
    image: "/images/fragrances/lumiere_dor.webp",
  },
  {
    id: 2,
    name: "Velours Rose",
    description: "A velvet touch of powdery rose wrapped in soft leather.",
    price: "$165",
    image: "/images/fragrances/velours_rose.webp",
  },
  {
    id: 3,
    name: "Nuit Éternelle",
    description: "The enigmatic essence of a starlit midnight.",
    price: "$195",
    image: "/images/fragrances/nuit_eternelle.webp",
  },
  {
    id: 4,
    name: "Jardin Émeraude",
    description: "Fresh, crisp greens with a deep woody soul.",
    price: "$155",
    image: "/images/fragrances/jardin_emeraude.webp",
  },
  {
    id: 5,
    name: "Brume Céleste",
    description: "Ethereal white musk balanced with pure marble elegance.",
    price: "$175",
    image: "/images/fragrances/brume_celeste.webp",
  },
  {
    id: 6,
    name: "Oud Impérial",
    description: "A majestic blend of smoky charcoal and rich gold filigree oud.",
    price: "$210",
    image: "/images/fragrances/oud_imperial.webp",
  },
  {
    id: 7,
    name: "Éclat Pur",
    description: "Crystal-clear minimalist fragrance with a striking platinum finish.",
    price: "$150",
    image: "/images/fragrances/eclat_pur.webp",
  },
]

export function BestsellersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = 350
  const gap = 32

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="collection" ref={ref} className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
              Signatures of the house
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="h-12 w-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="h-12 w-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <Button
              variant="link"
              className="text-foreground underline-offset-8 hover:underline text-sm tracking-widest uppercase p-0 hidden md:flex"
            >
              View all fragrances
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group shrink-0 w-[300px] md:w-[350px] snap-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(50px)",
              transition: `opacity 0.8s ease ${index * 0.05}s, transform 0.8s ease ${index * 0.05}s`,
            }}
          >
            <div className="bg-secondary/40 p-4 md:p-5 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-sans text-sm font-medium uppercase tracking-widest text-charcoal">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              <p className="mt-2 text-sm tracking-wide text-foreground/60">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile navigation — moved to the bottom, centered under the cards */}
      <div className="flex md:hidden justify-center gap-6 mt-8 px-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="h-12 w-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          aria-label="Next"
          className="h-12 w-12 rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

    </section>
  )
}
