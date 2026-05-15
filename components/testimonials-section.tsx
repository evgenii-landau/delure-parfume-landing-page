"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Isabelle M.",
    location: "Paris, France",
    text: "DELURE has redefined what I expect from a fragrance. Éclat Noir is now an essential part of who I am.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Alexander K.",
    location: "London, UK",
    text: "The longevity is remarkable. I receive compliments hours after application. Truly exceptional quality.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Sofia L.",
    location: "Milan, Italy",
    text: "Every detail speaks luxury—from the scent itself to the beautiful bottle. A masterpiece.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "James R.",
    location: "New York, USA",
    text: "I've tried countless premium fragrances. DELURE stands in a league of its own. Worth every penny.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
  {
    id: 5,
    name: "Emma T.",
    location: "Sydney, Australia",
    text: "The way the fragrance evolves throughout the day is magical. It tells a story on my skin.",
    rating: 5,
    image: "/images/testimonial-5.jpg",
  },
  {
    id: 6,
    name: "Yuki H.",
    location: "Tokyo, Japan",
    text: "Refined elegance in a bottle. Lumière d'Or perfectly captures the essence of sophisticated simplicity.",
    rating: 5,
    image: "/images/testimonial-6.jpg",
  },
  {
    id: 7,
    name: "Khalid A.",
    location: "Dubai, UAE",
    text: "As a collector of rare fragrances, DELURE exceeds my highest expectations. The oud notes are authentic perfection.",
    rating: 5,
    image: "/images/testimonial-7.jpg",
  },
  {
    id: 8,
    name: "Astrid N.",
    location: "Stockholm, Sweden",
    text: "Clean, modern, yet deeply complex. Brume Céleste is unlike anything I have ever experienced.",
    rating: 5,
    image: "/images/testimonial-8.jpg",
  },
  {
    id: 9,
    name: "Lucas P.",
    location: "São Paulo, Brazil",
    text: "The compliments never stop. DELURE creates fragrances that leave an unforgettable impression.",
    rating: 5,
    image: "/images/testimonial-9.jpg",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const totalItems = testimonials.length
  const cardWidth = 400
  const gap = 24

  // Create infinite loop by tripling the items
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

  // Initialize to middle set
  useEffect(() => {
    if (scrollRef.current) {
      const middleStart = totalItems * (cardWidth + gap)
      scrollRef.current.scrollLeft = middleStart
    }
  }, [totalItems])

  // Handle infinite scroll logic
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    
    const container = scrollRef.current
    const scrollLeft = container.scrollLeft
    const singleSetWidth = totalItems * (cardWidth + gap)
    
    // If scrolled to the end (third set), jump to middle set
    if (scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = scrollLeft - singleSetWidth
    }
    // If scrolled to the beginning, jump to middle set
    else if (scrollLeft <= 0) {
      container.scrollLeft = scrollLeft + singleSetWidth
    }
    
    // Calculate current index for display
    const normalizedScroll = scrollLeft % singleSetWidth
    const index = Math.round(normalizedScroll / (cardWidth + gap))
    setCurrentIndex(index % totalItems)
  }, [totalItems])

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = cardWidth + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 md:mb-16">
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
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-8 md:mt-0 justify-center md:justify-end">
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
      <div className="relative">
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index % totalItems) * 0.05 }}
              className="shrink-0 w-[350px] md:w-[400px] p-8 bg-secondary rounded-lg snap-center"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic min-h-[80px]">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
