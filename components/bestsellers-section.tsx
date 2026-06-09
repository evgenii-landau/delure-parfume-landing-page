"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Éclat Noir",
    description: "A mysterious blend of oud and amber",
    price: "$285",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "Lumière d'Or",
    description: "Radiant citrus with a golden heart",
    price: "$245",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Velours Rose",
    description: "Delicate rose enveloped in silk",
    price: "$265",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    name: "Nuit Éternelle",
    description: "The essence of a starlit evening",
    price: "$295",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    name: "Jardin Émeraude",
    description: "Fresh greens with a woody soul",
    price: "$275",
    image: "/images/product-5.jpg",
  },
  {
    id: 6,
    name: "Brume Céleste",
    description: "Ethereal musk kissed by clouds",
    price: "$255",
    image: "/images/product-6.jpg",
  },
  {
    id: 7,
    name: "Passion Bordeaux",
    description: "Rich berries in velvet warmth",
    price: "$315",
    image: "/images/product-7.jpg",
  },
  {
    id: 8,
    name: "Soleil Champagne",
    description: "Sparkling elegance at golden hour",
    price: "$305",
    image: "/images/product-8.jpg",
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
              Our bestsellers
            </h2>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex gap-3">
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
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <h3 className="font-sans text-sm font-medium uppercase tracking-widest text-charcoal">
                {product.name}
              </h3>
              <p className="font-serif text-lg text-foreground/80 shrink-0">{product.price}</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
