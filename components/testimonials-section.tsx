"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Isabelle M.",
    location: "Paris, France",
    text: "I wore Éclat Noir the morning of my wedding. Now I cannot smell it without going straight back there.",
  },
  {
    id: 2,
    name: "Alexander K.",
    location: "London, UK",
    text: "It is still there when I get home at night, faint on my collar. No other scent has done that for me.",
  },
  {
    id: 3,
    name: "Sofia L.",
    location: "Milan, Italy",
    text: "Strangers stop me to ask what I am wearing. I have started keeping the name to myself.",
  },
  {
    id: 4,
    name: "James R.",
    location: "New York, USA",
    text: "I have a shelf full of bottles I no longer reach for. This is the only one I have ever repurchased.",
  },
  {
    id: 5,
    name: "Emma T.",
    location: "Sydney, Australia",
    text: "By evening it smells like a different perfume than the one I sprayed at dawn. I love watching it change.",
  },
  {
    id: 6,
    name: "Yuki H.",
    location: "Tokyo, Japan",
    text: "Lumière d'Or is quiet. It does not announce itself, and that is exactly why people remember it.",
  },
  {
    id: 7,
    name: "Khalid A.",
    location: "Dubai, UAE",
    text: "I have collected oud for twenty years. Theirs is the real thing, and I do not say that lightly.",
  },
  {
    id: 8,
    name: "Astrid N.",
    location: "Stockholm, Sweden",
    text: "Brume Céleste smells like cold air and clean skin. I wear it on the days I want to feel like myself.",
  },
  {
    id: 9,
    name: "Lucas P.",
    location: "São Paulo, Brazil",
    text: "My grandmother asked if it was French. When I said yes, she smiled like she already knew.",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = 720
  const gap = 24

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between"
        >
          <div className="text-center md:text-left flex-1">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
              Loved by discerning souls
            </h2>
          </div>

          {/* Navigation Arrows (desktop — top right) */}
          <div className="hidden md:flex gap-6 md:justify-end">
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
        </motion.div>
      </div>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto px-6 lg:px-8 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="shrink-0 w-[85vw] sm:w-[520px] md:w-[640px] lg:w-[760px] snap-center px-4 md:px-10 text-center"
          >
            <blockquote className="font-serif font-light text-2xl md:text-3xl lg:text-4xl leading-[1.6] text-foreground text-balance">
              {testimonial.text}
            </blockquote>
            <figcaption className="mt-8 font-sans text-sm tracking-widest uppercase text-muted-foreground">
              — {testimonial.name}, {testimonial.location}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Mobile navigation — below the review text, centered */}
      <div className="flex md:hidden justify-center gap-6 mt-10 px-6">
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
