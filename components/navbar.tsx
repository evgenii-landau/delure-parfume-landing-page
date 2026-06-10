"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#collection", label: "Collection" },
  { href: "#story", label: "Our Story" },
  { href: "#experience", label: "Experience" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white md:bg-white/90 backdrop-blur-none md:backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`flex w-full items-center justify-between px-8 sm:px-12 xl:px-24 transition-all duration-300 ${
            isScrolled ? "py-4" : "py-8"
          }`}
        >
          {/* Logo — far left, always dark (sits on the light column / white bar) */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl tracking-[0.3em] text-zinc-900">
              DELURE
            </span>
          </Link>

          {/* Navigation — grouped to the right */}
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative inline-block text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isScrolled
                      ? "text-zinc-900/80 hover:text-zinc-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`hidden md:flex transition-colors duration-300 ${
                isScrolled
                  ? "text-zinc-900 hover:text-zinc-900"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button — overlays the cream content on mobile, so stays dark */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-zinc-900"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl tracking-[0.3em]">DELURE</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-3xl tracking-wider text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopping Bag Slide-over */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-[60] flex h-full w-full max-w-md flex-col bg-background"
            >
              <div className="flex h-20 items-center justify-between border-b border-border/50 px-6">
                <span className="text-sm tracking-[0.2em] uppercase text-foreground">
                  Shopping Bag
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close bag"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
                <p className="font-serif text-2xl text-foreground">
                  Your shopping bag is empty.
                </p>
                <Button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 text-sm tracking-widest uppercase"
                >
                  Continue Browsing
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
