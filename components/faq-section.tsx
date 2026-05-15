"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long do DELURE fragrances last?",
    answer: "Our Eau de Parfum concentration ensures longevity of 8-12 hours on skin. The scent will continue to evolve throughout the day, revealing different facets as it interacts with your natural chemistry.",
  },
  {
    question: "What makes DELURE different from other luxury perfumes?",
    answer: "We source the rarest natural ingredients from ethical suppliers worldwide, and each fragrance is handcrafted by our master perfumers in Grasse, France. Our commitment to quality means no shortcuts—ever.",
  },
  {
    question: "Do you offer samples before purchasing?",
    answer: "Yes, we offer a Discovery Set featuring all four of our signature fragrances in 2ml sizes. This allows you to experience each scent on your skin before committing to a full bottle.",
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer complimentary worldwide shipping on all orders. Your fragrance will be carefully packaged and typically arrives within 5-7 business days. Express shipping is available at checkout.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely. DELURE is committed to ethical practices. We never test on animals, and we carefully vet all our suppliers to ensure they share our values. Many of our ingredients are also sustainably sourced.",
  },
  {
    question: "What is your return policy?",
    answer: "We want you to be completely satisfied. If you're not in love with your fragrance, you may return any unused portion within 30 days for a full refund or exchange.",
  },
]

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Questions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            Frequently asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 pb-4"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
