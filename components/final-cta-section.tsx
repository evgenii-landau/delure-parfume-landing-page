"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (isValid) {
      setStatus("success")
      setEmail("")
      return
    }
    setStatus("error")
  }

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sections/signature.webp"
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
              Stay in touch
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8 text-balance">
              Find your signature scent
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed">
              A few letters a year, never more. New compositions as they are released, and the occasional story from the studio in Grasse.
            </p>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex items-center gap-8 max-w-md mx-auto mb-4"
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status !== "idle") setStatus("idle")
                }}
                className="flex-1 rounded-none border-0 border-b border-white/20 bg-transparent px-0 shadow-none text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white/50"
              />
              <Button
                type="submit"
                variant="ghost"
                className="shrink-0 px-0 text-xs uppercase tracking-[0.2em] font-medium text-white opacity-80 hover:opacity-100 hover:bg-transparent hover:text-white"
              >
                Subscribe
              </Button>
            </form>

            <div className="h-6 mb-6" aria-live="polite">
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`text-sm ${status === "success" ? "text-cream" : "text-primary-foreground/70"}`}
                  >
                    {status === "success"
                      ? "Thank you. You have been added to our inner circle."
                      : "Please enter a valid email address."}
                  </motion.p>
                )}
              </AnimatePresence>
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
