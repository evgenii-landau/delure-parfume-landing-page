import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "All Fragrances", href: "#" },
    { label: "Discovery Set", href: "#" },
    { label: "Gift Sets", href: "#" },
    { label: "Accessories", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "#story" },
    { label: "Ingredients", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.3em]">DELURE</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Fragrance composed by hand in Grasse, made to become your own.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} DELURE. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <Link href="#" className="hover:text-primary-foreground/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground/60 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-foreground/60 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
